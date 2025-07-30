import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

let emailAPI = new TransactionalEmailsApi();
emailAPI.authentications.apiKey.apiKey = process.env.VITE_BREVO_API_KEY;
/**
 * Vercel Serverless Function
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  let mail = new SendSmtpEmail();
  mail.subject = 'Mensaje desde portafolio';
  mail.textContent = message;
  mail.sender = { name, email };
  mail.to = [{ email: 'senan996@gmail.com', name: 'Senan Abbasov' }];

  try {
    await emailAPI.sendTransacEmail(message);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Send error:', error?.response?.body || error.message);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
