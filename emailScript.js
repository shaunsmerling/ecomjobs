var config = require('./config');
const fetch = require('node-fetch');

async function fetchData(){
  const response = await fetch( `${config.api_url}/api/jobs`)
  const resData = await response.json();
  return resData; 
};

async function fetchEmail() {
  const response = await fetch (`${config.api_url}/api/emails`)
  const resData = await response.json()
  return resData
}




// Get todays date, minus 7 days (1 week) to get the date 7 days ago. Convert date to datets. Write logic only include
// jobs that are posted after x datets

// const MongoClient = require("mongodb").MongoClient;
 const nodemailer = require("nodemailer");




 const dotenv = require('dotenv');
dotenv.config();

function getTimestampInSeconds() {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - (3 * 24 * 60 * 60 * 1000));
  const timestampInSeconds = Math.floor(threeDaysAgo.getTime() / 1000);
  return timestampInSeconds;
}

const timestampInSeconds = getTimestampInSeconds();


// function getTodaysDate() {
//   const today = new Date();
//   const year = today.getFullYear().toString().substr(-2);
//   const month = (today.getMonth() + 1).toString().padStart(2, '0');
//   const day = today.getDate().toString().padStart(2, '0');
//   return `${month}/${day}/${year}`;
// }

// Get Todays Date

  // Function to send an email using Nodemailer
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

  // const email = async () => {
  fetchData().then((data) => {
    console.log('Fetched data:', data);
    // Filter out jobs that are older than 7 days
    const filteredData = data.filter((job) => {
    
      const date = new Date(job.postedat);
      const timestampInSecs = Math.floor(date.getTime() / 1000);
  
  
      if (timestampInSecs > timestampInSeconds) {
       return job 
      }
    });


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

  let emailList = removeDuplicatesAndEmptyEmails(mockEmails)

  const structuredData = filteredData.map((job) => `
      <a href=${`www.ecomportal.co/job/${job.jobUrl}`}><h2>${job.job_position}</h2></a> <p style="margin-top: 0px"> ${job.company_name && job.location && job.job_type ? job.company_name + " | " + job.location + " | " + job.job_type : job.company_name + " | " + job.location }</p>
    `
).join('')


  emailList.forEach(function (email, index) {
    setTimeout(() => {
      sendMail()
      }, 3000 * index)
  


  

      const mailOptions = {
        from: "shaun@ecomportal.co",
        to: `${email}`,
        subject: `⚡️ ${filteredData.length} New Jobs + Salary Stats Now Live ⚡️`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                font-size: 14px;
                line-height: 1.5;
                background-color: #f4f4f4;
            }
        
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 4px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
        
            .header {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        
            .header img {
                max-width: 20%;
                height: auto;
                margin-bottom: 20px;
            }
        
            .greeting {
                font-weight: bold;
                color: #333333;
            }
        
            .content {
                margin-bottom: 20px;
            }
        
            .jobs {
                font-weight: bold;
                color: #2c3e50;
            }
        
            .cta {
                color: #000000;
            }
    
            .sponsor-section {
              background-color: #fffcd3;
              padding: 15px;
              border-radius: 4px;
              margin-bottom: 20px;
          }
      
          .sponsor-title {
              font-weight: bold;
              color: #333333;
              margin-bottom: 10px;
          }
      
          .sponsor-text {
              color: #333333;
              margin-bottom: 10px;
          }
      
          .sponsor-button {
              display: inline-block;
              background-color: #000000;
              color: #ffffff !important;
              text-decoration: none;
              padding: 10px 15px;
              border-radius: 4px;
              font-weight: bold;
          }
    
            .footer {
                text-align: center;
                font-size: 12px;
                color: #999;
                margin-top: 20px;
            }
    
           
          
        </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://storage.googleapis.com/ecomportal-images/images/logo.png" alt="ecomportal-logo" />
                </div>
                <div class="content">
                    <p class="greeting">Hey everyone 👋</p>
                    <p class="cta">
                    We recently released employment data based on the vast amount of jobs we have on site. This includes information regarding:
                    </p>
                    <br></br>
                    - Highest Paying Jobs
                    <br></br>
                    - Lowest Paying Jobs
                    <br></br>
                    - Most In-Demand Job Categories
                    <br></br>
                    - Most In-Demand Job Roles
                    <br></br>
                    <p class="cta">
                    We'll be updating this page with my data shortly. To view it, head over to Salary Stats. Additionally, we'll be curating the release of a "State of eCommerce" report quarterly. Check out for the Q2 release in a months time. 
                    </p>
                    <p class="cta">
                    Now for that beautiful 4 letter word. You're thinking about it, we dream about it. Yup, JOBS!
                    </p>
                    <p class="cta">For today, we've got ${filteredData.length} new jobs to share with you from ecommerce brands hiring this week!</p>
                    <p class="cta">Check them out & feel free to apply via the links below. </p>
                    <p class="cta">And as always, if you enjoy the Ecomportal platform - consider telling a friend or two about us. We really appreciate it! </p>
                    <p class="cta"> - Shaun 🤖 </p>
                </div>
               
        
                ${structuredData}
            </div>
            <p class="footer">EcomPortal - Helping you find the best DTC jobs</p>
        </body>
        </html>

    `
  };


  function sendMail() {
    transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
       console.log(error);
     } else {
       console.log("Email sent: " + info.response);
     }
   });

   }
     })
   })
})






  // }

  // const job = new CronJob("0 0 * * 2", () => {
  //   email();
  // })

  // job.start()







