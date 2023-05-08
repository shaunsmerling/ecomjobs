const rwClient = require("./TwitterClient.js");
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");

let daysAgo = 7;

async function fetchData() {
  const dateAgo = new Date();
  dateAgo.setDate(dateAgo.getDate() - daysAgo);
  const timestamp = Math.floor(dateAgo.getTime() / 1000);
  console.log(timestamp)
  console.log(timestamp === 1683475200 ? true : false)

  const response = await fetch(`https://ecomportal.co/api/jobs?datets=${timestamp}`);
  
  try {
    const data = await response.json();
    if (data.length === 0 && daysAgo > 0) {
      daysAgo -= 1;
      console.log(`No jobs on ${dateAgo.toISOString().split('T')[0]}. Trying ${daysAgo} days ago...`);
      setTimeout(fetchData, 5000);
    } else {
      return data;
    }
  } catch (error) {
    daysAgo -= 1;
    console.log(error);
    if (daysAgo < 1) {
      console.log("No jobs found.");
      process.exit(1);
    } else {
      console.log(`Retrying in 5 seconds...`);
      setTimeout(fetchData, 5000);
    }
  }
}

const tweet = async () => {
  const data = await fetchData();
  console.log("data:", data)
  if (!data) return;
  const randomIndex = Math.floor(Math.random() * data.length);
  const job = data[randomIndex];

  try {
    await rwClient.v1.tweet(`${job.company_name} is hiring a ${job.job_position}! 

    ${job.location ? `📍 ${job.location}` : ``}
    ${job.job_type ? `🧳 ${job.job_type}` : ``}
    ${job.category ? `📖 ${job.category}` : ``}
    ${job.salaryMax ? `💰 ${job.salaryMax}` : ``}
    
Check below to apply 👇🏼
      
www.ecomportal.co/job/${job.jobUrl} 
       
#ecommerce #shopify #jobs #hiring`
    );
    console.log("Tweet successful");
    process.exit(0);
  } catch (e) {
    console.log(e);
  }
};

const job = new CronJob("* * * * * *", () => {
  console.log("Tweeting...");
  tweet();
});

job.start();

function stopProgram() {
  job.stop();
  console.log("Stopped");
}

setTimeout(stopProgram, 10000);
