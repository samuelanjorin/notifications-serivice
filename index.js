import express from 'express'
import rabbitmq from './config/rabbitmq'
import receiver from './utils/rabbitReceiver'
import logger from './utils/errors/errorlogger'
import dotenv from 'dotenv'

const app = express()


dotenv.config();
const port = process.env.RACS_PORT || 7007

receiver()

app.listen(port, async () => {
  logger.info(`Listening to port ${port}.......`)
})

