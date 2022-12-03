export default function (req, res) {

   

    let nodemailer = require('nodemailer')
   const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'shaun@ecom-jobs.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
   });

   const mailData = {
    from: 'shaun@ecom-jobs.com',
    to: 'shaunsmerling@gmail.com',
    subject: `EcomJobs Inquiry From ${req.body.name}`,
    text: req.body.message  + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)
  console.log(req.body)
  }