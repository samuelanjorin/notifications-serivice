import rabbit from '../config/rabbitmq'
import sendEmail from './sendEmail'
import constants from './constants'
import dotenv from 'dotenv'


dotenv.config()


let queueName =process.env.QUEUE_NAME


  const receiver = async function () {
    try{
        let channel = await rabbit()
        return channel.assertQueue(queueName).then(function(ok) {
          return channel.consume(queueName, function(msg) {
            if (msg !== null) {
              let content = JSON.parse(JSON.parse(msg.content))
              if( content.notification_type === constants.NOTIFICATION_TYPE.email ){
                  sendEmail(content.payload)
              }
             
              channel.ack(msg);
            }
          });
        })
    
    }catch(error) {
     
  }

  }
  export default receiver
 