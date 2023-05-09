import nodemailer from "nodemailer";

export default async function (req, res) {
  const { name, email, message } = req.body;

  console.log(req.body);
  //send email using nodemail

  // let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "nikhilbtest@gmail.com",
      pass: "fikcopslstfolqom",
    },
  });

  const mailData = {
    from: "nikhilborge3439.nb@gmail.com",
    to: email,
    subject: `message from `,
    text: ` Name: ${name} email: ${email} message: ${message}`,
    // html: <div>{message}</div>,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to send email" });
  }
  //   transporter.sendMail(mailData, function(err, info){
  //     if(err)
  //     console.log(err)
  //     else
  //     console.log(info)
  //   })
  //   res.status(200)

  // console.log(req.body)
}
