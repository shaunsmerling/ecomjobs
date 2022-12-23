export default async (req, res) => {

   

    let nodemailer = require('nodemailer')
   const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'shaun@ecomportal.co',
      pass: process.env.EMAIL_PW,
    },
    secure: true,
   });

   const mailData = {
    from: 'shaun@ecomportal.co',
    to: 'shaunsmerling@gmail.com',
    subject: `EcomPortal Inquiry From ${req.body.name}`,
    text: req.body.message  + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>sent from: ${req.body.email}</p>`
   }



   transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  })


  res.status(200)
  console.log(req.body)
  }