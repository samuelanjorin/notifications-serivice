import sgMail  from '@sendgrid/mail'
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail (msg) {
    sgMail.send(msg)
}
export default sendEmail