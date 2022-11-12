import {
  getAllJobs,
  createJob,
  getJobByUrl,
  updateJob,
  deleteJob,
  getJobsByCompanyId
} from "../../prisma/job";


// fetch("/api/jobs", {
//   method: 'POST',
//   body: JSON.stringify({
//     full_name: 'John Doe 4',
//     email: 'johndoe@yopmail.com',
//     company_url: 'https://demo.com',
//     job_postion: 'Developer',
//     location: 'USA',
//     job_type: 'Full Time',
//     location_type: 'Remote',
//     company_description: 'We are a good company',
//     job_description: 'Job is very good',
//     job_requirements: 'You should be a very good developer',
//     application_url: 'https://demo.com',
//   }),
// })

// fetch("/api/jobs")

// fetch("/api/jobs?id=632f1aa0bfa79724cbab00f2")

// fetch("/api/jobs", {
//   method: 'PUT',
//   body: JSON.stringify({
//     full_name: 'John Doe 2 updated',
//     id: '632f1aa0bfa79724cbab00f2'
//   })
// });

// fetch("/api/jobs", {
//   method: 'DELETE',
//   body: JSON.stringify({
//     id: '632f1aa0bfa79724cbab00f2'
//   })
// });

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        // Create a new job
        const body = JSON.parse(req.body);
        const job = await createJob(body);
        return res.json(job);
      }
      case "GET": {
        // Get a single job if id is provided is the query
        // api/jobs?id=1
        const query = req.query;
        if (query.jobUrl) {
          const job = await getJobByUrl(query.jobUrl);
          return res.json(job);
        }

        if (query.companyId) {
          const jobs = await getJobsByCompanyId(query.companyId);
          return res.json(jobs);
        }

        // Otherwise, fetch all jobs
        const jobs = await getAllJobs();
        return res.json(jobs);
      }
      case "PUT": {
        // Update an existing job
        const body = JSON.parse(req.body);
        const { id, ...updateData } = body;
        const user = await updateJob(id, updateData);
        return res.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const body = JSON.parse(req.body);
        const { id } = body;
        const job = await deleteJob(id);
        return res.json(job);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
