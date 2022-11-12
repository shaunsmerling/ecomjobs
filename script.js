

let company_name = "Hobby Craft"
let job_position = "Janitor"
let job_type = "Remote"

const random = Math.floor(Math.random() * 100000000)
const newUrl = job_type.replace(/\s/g, "-") + "-" + company_name.replace(/\s/g, "-") + "-" + job_position.replace(/\s/g, "-") + "-" + random;
const jobUrl = newUrl.toLowerCase();






// 2. Add jobUrl for each job using the logic

// 3. Update the documents in Mongodb with JobUrl

// 4. First will be a Get method to get all jobs, and then patch to update the documents

// First, write an API call in any file. Second, define that API in API folder (create a new API URL). There, you write this logic. Get all docs, loop through, add JobURL, then update the docs. 