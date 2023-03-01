var config = require('./config');
const fetch = require('node-fetch');

async function fetchData(){
  const response = await fetch( `${config.api_url}/api/jobs`)
  const resData = response.json();
  return resData; 
};

async function fetchEmail() {
  const response = await fetch (`${config.api_url}/api/emails`)
  const resData = response.json()
  return resData
}


fetchEmail().then((data) => {
  let mockEmails = []
  data.forEach((emails) => {
    mockEmails.push(emails.email)
  })

  function removeDuplicatesAndEmptyEmails(emails) {
    if (emails.length === 0) {
      console.log("The email list is empty.");
      return [];
    }
  
    const uniqueEmails = new Set();
  
    for (const email of emails) {
      if (email === "") {
        continue;
      }
  
      if (!uniqueEmails.has(email)) {
        uniqueEmails.add(email);
      }
    }
  
    return [...uniqueEmails];
  }

  emailList = removeDuplicatesAndEmptyEmails(mockEmails)

 
})


// Get todays date, minus 7 days (1 week) to get the date 7 days ago. Convert date to datets. Write logic only include
// jobs that are posted after x datets

// const MongoClient = require("mongodb").MongoClient;
 const nodemailer = require("nodemailer");




 const dotenv = require('dotenv');
dotenv.config();

function getTimestampInSeconds() {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
  const timestampInSeconds = Math.floor(sevenDaysAgo.getTime() / 1000);
  return timestampInSeconds;
}

const timestampInSeconds = getTimestampInSeconds();




// Get Todays Date

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


    // Filter out jobs that are older than 7 days
    const filteredData = data.filter((job) => {
    
      const date = new Date(job.postedat);
      const timestampInSecs = Math.floor(date.getTime() / 1000);
  

      if (timestampInSecs > timestampInSeconds) {
        return job;
      }
    });


const structuredData = filteredData.map((job) => `
      <a href=${`www.ecomportal.co/job/${job.jobUrl}`}><h2>${job.job_position}</h2></a> <p style="margin-top: 0px"> ${job.company_name} | ${job.location} | ${job.job_type}</p>
    `
).join('')



    emailList.forEach((email) => {


  const mailOptions = {
    from: "shaun@ecomportal.co",
    to: `${email}`,
    subject: ` 🚀 ${filteredData.length} New Jobs from EcomPortal`,
    html: `
    <div style="margin: 0; padding: 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; text-align:center;" >
    <img style= "max-width: 50%; height: auto;" src="www.ecomportal.co/logo.png" alt="ecomportal-logo" />
    <div style="max-width: 600px; margin: 0 auto;">
    <p>Hey there 👋 </p>
    <p>
    Firstly, thank you for subscribing to EcomPortal's weekly newsletter! 🙏🏻
    </p>
    <p>
    We've got ${filteredData.length} new jobs to share with you from ecommerce brands hiring this week!
    </p>
    <p style="padding-bottom: 10px;">
    Check them out & feel free to apply via the links below! 👇🏻
    </p>

    ${structuredData}

    </div>
    </div>

    `
  };



 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
  setTimeout(3000);
});
  })
});







