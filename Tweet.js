const rwClient = require("./TwitterClient.js");
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");

let daysAgo = 7;

async function fetchData() {
  const dateAgo = new Date();
  dateAgo.setDate(dateAgo.getDate() - daysAgo);
  const timestamp = Math.floor(dateAgo.getTime() / 1000);

  const response = await fetch(`https://ecomportal.co/api/jobs?datets=${timestamp}`);
  
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    daysAgo -= 1;
    console.log(error);
    if (daysAgo < 1) {
      console.log("no jobs on that date were added");
      process.exit(1);
    } else {
      return fetchData();
    }
  }
};

const tweet = async () => {
  const data = await fetchData();

  const rand = Math.floor((Math.random() * 300) + 1);
  const job = data[data.length - rand];

  try {
    await rwClient.v1.tweet(`${job.company_name} is hiring a ${job.job_position}! 

📍 ${job.location}
💼 ${job.job_type}

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
