import http from 'http'

import { logger } from './logger'

const task = 'myfunc'

export const executeAsync = async (args: Record<string, unknown>) => {
  logger.debug(`Executing task: ${task}`)
  const message = JSON.stringify(args)
  const options = {
    hostname: 'localhost',
    port: 8910,
    method: 'POST',
    path: `.redwood/functions/${task}`,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(message),
    },
  }
  await new Promise<void>((resolve, reject) => {
    const req = http.request(options)
    req.on('error', (e) => {
      logger.error(`Error invoking task: ${e.message}`)
      reject(e)
    })
    req.write(message)
    req.end(() => {
      logger.debug(`End of calling task: ${task}`)
      resolve()
    })
  })
}
