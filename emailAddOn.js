const axios = require('axios');
const nodemailer = require('nodemailer');
var config = require('./config');
const dotenv = require('dotenv');
dotenv.config();


axios.get(`${config.api_url}/api/jobs`)
  .then((response) => {
    const jobs = response.data;
    const emailBlastJobs = jobs.filter(job => job.emailBlast);
    if (emailBlastJobs.length > 0) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        pool: true,
        auth: {
          user: "shaun@ecomportal.co",
          pass: process.env.EMAIL_PW,
        },
        secure: true,
      });

      let message = 'Jobs with email blast:\n\n';
      emailBlastJobs.forEach((job) => {
        message += `Application URL: ${job.application_url}\n`;
        message += `Email: ${job.email}\n\n`;
      });

      const mailOptions = {
        from: 'shaun@ecomportal.co',
        to: 'shaunsmerling@gmail.com',
        subject: `Email blast bought by ${emailBlastJobs[0].email}`,
        text: message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    } else {
      console.log('No jobs with email blast found');
    }
  })
  .catch((error) => {
    console.log(error);
  });
