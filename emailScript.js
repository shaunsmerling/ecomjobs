var config = require('./config');
const fetch = require('node-fetch');

async function fetchData(){
  const response = await fetch( `${config.api_url}/api/jobs`)
  const resData = response.json();
  return resData; 
};


// const MongoClient = require("mongodb").MongoClient;
 const nodemailer = require("nodemailer");




 const dotenv = require('dotenv');
dotenv.config();




// Get Todays Date
function getTodaysDate() {
    return new Date().toLocaleDateString();
  }

  // Function to send an email using Nodemailer

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "shaun@ecomportal.co",
      pass: process.env.EMAIL_PW,
    },
    secure: true,
  });

  fetchData().then((data) => {

    const filteredData = data.filter(function(entry) {
      return entry.datets === "1674864000";
    });

  const mailOptions = {
    from: "shaun@ecomportal.co",
    to: "shaunsmerling@gmail.com",
    subject: `EcomPortal Job Alerts 🚨: ${getTodaysDate()}`,
    text: `Here are the new jobs uploaded as of ${getTodaysDate()}:
  
   

    ${filteredData.map((job) =>` ${job.company_name} is looking for a ${job.job_position}\n`)
      }`
  };


 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
});







