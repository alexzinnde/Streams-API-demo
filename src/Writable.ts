import {LoggerFactory} from '@zinntechniker/logger'
import path from 'node:path'
import fs from 'node:fs'

const logger = LoggerFactory.getLogger('Writable')

logger.info('Writable Program START')

const fileName = `${new Date().toISOString()}-write.txt`
const filePath = path.resolve('assets', fileName)

logger.info('Writing to filepath [%s]', filePath)

const writableStream = fs.createWriteStream(filePath)
writableStream.setDefaultEncoding('utf8')

const data = 'This is written from a Writable stream'

logger.info('Writing data')
writableStream.write(data)
writableStream.end()

logger.info('Done writing')

logger.info('Writable Program END')
