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
          <h1>Activation link</h1>
          <a href="${link}">${link}</a>
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
    subject: "You buy our products on" + process.env.CLIENT_URL,
    text: "",
    html: `
      <div>
          <h1>You can return your item within 14 days</h1>
          <a href="${link}">Cancelation</a>
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
