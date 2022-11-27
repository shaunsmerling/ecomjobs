 const rwClient = require("./TwitterClient.js");
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");
const api_url = require("./config.js")

async function fetchData(){
  const response = await fetch(`http:/localhost:3000/api/jobs`)
  const resData = response.json();
  console.log(resData);
  return resData; 
};


const tweet = async () => {

fetchData().then(async (data) => {
// the network request is completed
// take the latest job on the list, use it, and then make sure that if its 
// still the latest job that you go to the next latest job (no duplicates)

let rand = Math.floor((Math.random() * 300) + 1)

let job = data[data.length - rand];
console.log(job)
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
  } });
} 


const job = new CronJob("* * * * * *", () => {
  // seconds, mins, hour, day, month, year

  console.log("Tweeting...");
  tweet()
  
});

job.start()

function stopProgram() {
  job.stop();
  console.log("Stopped");
}



setTimeout(stopProgram, 5000)

