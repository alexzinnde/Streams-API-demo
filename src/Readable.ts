/***********************************************************************************
 * Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
 * In Node.js, there are four types of streams:
 *
 * i) Readable − Stream which is used for read operation.
 *
 * ii) Writable − Stream which is used for write operation.
 *
 * iii) Duplex − Stream which can be used for both read and write operation.
 *
 * iv) Transform − A type of duplex stream where the output is computed based on input.
 *
 */

import path from 'node:path'
import fs from 'node:fs'
import {LoggerFactory} from '@zinntechniker/logger'

const logger = LoggerFactory.getLogger('Readable')

logger.info('Program START')

const fileName = 'file-1.txt'
const filePath = path.resolve('assets', fileName)

logger.info('File path is [%o]', filePath)

let data = ''
const readerStream = fs.createReadStream(filePath)

readerStream.setEncoding('utf8')
readerStream.on('error', err => {
  logger.error(`Error [${err.stack?.toString()}]`)
})
readerStream.on('data', chunk => {
  logger.debug('readerStream [data] [%s]', JSON.stringify(chunk))
  data += chunk
})
readerStream.on('end', () => {
  logger.debug('readerStream [end]')
  logger.info('Result data [%s]', `\n${data}\n`)
})

logger.info('Program END')
