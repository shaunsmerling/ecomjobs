const rwClient = require("./TwitterClient.js");
const CronJob = require("cron").CronJob;
const fetch = require("node-fetch");

let daysAgo = 6;

async function fetchData() {
  const dateAgo = new Date();
  dateAgo.setDate(dateAgo.getDate() - daysAgo);
  const month = (dateAgo.getMonth() + 1).toString().padStart(2, '0');
  const day = dateAgo.getDate().toString().padStart(2, '0');
  const year = dateAgo.getFullYear();
  const dateFormatted = `${month}/${day}/${year}`;
  console.log(dateFormatted);
  const response = await fetch(`https://ecomportal.co/api/jobs?postedat=${dateFormatted}`);
  
  try {
    const data = await response.json();
    if (data.length === 0 && daysAgo > 0) {
      daysAgo -= 1;
      console.log(`No jobs on ${dateFormatted}. Trying ${daysAgo} days ago...`);
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
  if (!data) return;
  const randomIndex = Math.floor(Math.random() * data.length);
  const job = data[randomIndex];
  let salaryMaxFormatted = "";
if (job.salaryMax && job.salaryMax !== 0) {
  if (job.salaryMax < 1000) {
    salaryMaxFormatted = `$${job.salaryMax * 1000}`;
  } else {
    salaryMaxFormatted = `$${job.salaryMax}`;
  }
}


  try {
await rwClient.v1.tweet(`${job.company_name} is hiring a ${job.job_position}!

${job.location ? `📍\t${job.location}\n` : ''}${job.job_type ? `🧳\t${job.job_type}\n` : ''}${job.category ? `📖\t${job.category}\n` : ''}${salaryMaxFormatted !== "0" ? `💰\t${salaryMaxFormatted}\n` : ''}

Check below to apply 👇🏼

www.ecomportal.co/job/${job.jobUrl}

#ecommerce #shopify #jobs #hiring`);
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
