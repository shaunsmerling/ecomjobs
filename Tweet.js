const rwClient = require("./TwitterClient.js");
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");

async function fetchData(){
  const response = await fetch("http://localhost:3000/api/jobs")
  const resData = response.json();
  console.log(resData);
  return resData; 
};

let myApps

const tweet = async () => {

fetchData().then(async (data) => {
// the network request is completed
myApps = data;
  for (let i = 0; i < data.length; i++) {
    const job= data[i]
  try {
    await rwClient.v1.tweet(
      `${job.company_name} is hiring a ${job.job_position}! 

      📍 ${job.location}
      💼 ${job.job_type}

      Check below to apply 👇🏼
      
      www.ecom-jobs.com/job/${job.jobUrl} 
       
      #ecommerce #shopify #jobs #hiring`
    );
  } catch (e) {
    console.log(e);
  }
} }
)}

const job = new CronJob("* * * * * *", () => {
  // seconds, mins, hour, day, month, year

  console.log("Tweeting...");
  tweet();
});

job.start();
