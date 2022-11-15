
 import React, {useState, useEffect} from 'react';

 const [jobData, setJobData] = useState({
        job_position: "",
        job_type: "",
        company_name: "",
        job_url: "",
 })
        fetch("/api/jobs", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setJobData(data))
    
    
    
    
    const rwClient = require("./TwitterClient.js");
    const CronJob = require("cron").CronJob;
    
    // 1. How do I run this script  server side? I want to run this script every hour. SetInterval? Run this script on the _app.js? with Set Interval?
    // 2. Import Module issue. 
    
    const tweet = async () => {
    
        for (let i = 0; i < jobData.length; i++) {
            const job = jobData[i];
    
        try {
          await rwClient.v1.tweet(`${job.company_name} is hiring a ${job.job_type} ${job.job_position}! Apply here: https://ecom-jobs.com/job/${jobUrl}`);
        } catch (e) {
          console.log(e)
        }
    }
    }
    
    const job = new CronJob("* * * * *", () => {
    
        console.log("Tweeting...");
        tweet();
    });
    
    job.start();
    