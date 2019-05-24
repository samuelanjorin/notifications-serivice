import { Connection }  from 'amqplib-as-promised'
import dotenv from 'dotenv'
import sendEmail from '../utils/sendEmail'
import constants from '../utils/constants'

dotenv.config()
/**
   * @description connects to RabbitMQ
   *
   * @param {string} queueName
   * @param {string} message
   *
   *
   */
 async function connect () {
  
  let queueName =process.env.QUEUE_NAME
const msg = {
  notification_type: 'EMAIL',
  payload:{
    to: 'samelikzra@gmail.com',
    from: 'samelikzra@gmail.com',
    subject: 'TEXT',
    text: 'FROM CODE',
    html: '<strong>We are fine</strong>',
  }
  
}
const connection = new Connection(process.env.AMQP_URL)
await connection.init()
const channel = await connection.createChannel()
await channel.assertQueue(queueName)
 // await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(msg)))

return channel
}
  
  
module.exports = connect

