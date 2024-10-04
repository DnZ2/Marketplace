const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
const sendActivationMail = async (to, link) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: "Activate your account on " + process.env.CLIENT_URL,
    text: "",
    html: `
      <div>
          <h1 style="margin-top: 16px; margin-bottom: 16px;">Activate your account</h1>
          <a style="display: block; padding: 16px 48px 16px 48px; border-radius: 8px; background-color: #40AD6C; text-decoration: none; font-size: 20px;  color: black;" href="${link}">
          Activation
          </a>
      </div>  
    `,
  });
  try {
  } catch (e) {
    console.log(e);
  }
};
const sendPaymentInfoMail = async (to, link) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: "You buy our products on " + process.env.CLIENT_URL,
    text: "",
    html: `
      <div>
          <h1>You can return your item within 14 days</h1>
          <div style="display: flex; gap: 8px; margin-top: 16px;">
              <a style="display: block; padding: 16px 48px 16px 48px; background-color: #DB4444; border-radius: 8px;  text-decoration: none;  color: white; font-size: 20px;" href="${link}">Cancelation</a>
              <a style="display: block; padding: 16px 48px 16px 48px; border-radius: 8px; background-color: #E7E9EB; text-decoration: none; font-size: 20px;  color: black;" href="${
                process.env.CLIENT_URL + "/profile"
              }">Post Review</a>
          </div>
      </div>  
    `,
  });
  try {
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  sendActivationMail,
  sendPaymentInfoMail,
};
