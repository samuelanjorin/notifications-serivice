# turing-notifications-serivice

This is on one the services of Turing Eccomerce Microservices. 

# Deployed on Port http://3.130.189.86:7007

This services consumes messages from Rabbit MQ then send the appropraite notification

Message for format/PayLoad for EMAIL Notification:

{
    notification_type: 'EMAIL',
    payload: {
      to: 'xxxx@mail.xxx',
      from: 'yyyy@mail.yyy',
      subject: 'Enter DSubject',
      text: 'Plain Text Detials',
      html: 'Enter HTML STRING'

    }
}
E.G: Order Service sends this sample payload to the notification service to send order creation email to the customer.
The notification service receives this sample payoad and sends the notification depending on the notification type.
Currently, only email notification have been developed but more features like SMS and push notification can be added to this service
