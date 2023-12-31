import {LoggerFactory} from '@zinntechniker/logger'
import path from 'node:path'
import fs from 'node:fs'

const logger = LoggerFactory.getLogger('Pipe')

const readFileName = 'file-1.txt'
const readFilePath = path.resolve('assets', readFileName)
const writeFileName = `${new Date().toISOString()}-pipe-write.txt`
const writeFilePath = path.resolve('assets', writeFileName)

logger.info('readFilePath [%s]', readFilePath)
logger.info('writeFilePath [%s]', writeFilePath)

const readable = fs.createReadStream(readFilePath)
readable.setEncoding('utf-8')

const writable = fs.createWriteStream(writeFilePath)
writable.setDefaultEncoding('utf-8')

readable.pipe(writable)

logger.info('Programe Ended')
