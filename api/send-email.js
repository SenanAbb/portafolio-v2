import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

/**
 * Vercel Serverless Function
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, lastname, phone, email, message } = req.body || {};

  if (!name || !lastname || !phone || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const msg = {
    to: process.env.VITE_SENDGRID_EMAIL_TO,
    from: process.env.VITE_SENDGRID_EMAIL_FROM,
    subject: `New message from ${name} ${lastname}`,
    html: `
      <h3>New message from ${name} ${lastname}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Send error:', error?.response?.body || error.message);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
