let company_name = "Hobby Craft";
let job_position = "Janitor";
let job_type = "Remote";

export function generateJobUrl(company_name, job_position, job_type) {
  const random = Math.floor(Math.random() * 100000000);
  let newUrl = "";
  if(job_type) {
    newUrl += job_type.replace(/\s/g, "-")
  } if(company_name) {
    if(job_type) {
        newUrl += "-"
    }
    newUrl += company_name.replace(/\s/g, "-")
  }
   if(job_position) {
    if(company_name) {
        newUrl += "-"
    }
    newUrl += job_position.replace(/\s/g, "-")+
    "-" +
    random;
  }

  const jobUrl = newUrl.toLowerCase();
  return jobUrl;
}

// 2. Add jobUrl for each job using the logic

// 3. Update the documents in Mongodb with JobUrl

// 4. First will be a Get method to get all jobs, and then patch to update the documents

// First, write an API call in any file. Second, define that API in API folder (create a new API URL). There, you write this logic. Get all docs, loop through, add JobURL, then update the docs.