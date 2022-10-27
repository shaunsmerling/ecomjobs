import {
    getAllEmails,
    createEmail,
    getEmailById,
    updateEmail,
    deleteEmail,
  } from "../../prisma/email";
  

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
          // Create a new email
          const body = JSON.parse(req.body);
          const email = await createEmail(body);
          return res.json(email);
        }
        case "GET": {
          // Get a single email if id is provided is the query
          // api/jobs?id=1
          const query = req.query;
          if (query.id) {
            const email = await getEmailById(query.id);
            return res.json(email);
          }
  
          // Otherwise, fetch all jobs
          const jobs = await getAllEmails();
          return res.json(jobs);
        }
        case "PUT": {
          // Update an existing job
          const body = JSON.parse(req.body);
          const { id, ...updateData } = body;
          const user = await updateEmail(id, updateData);
          return res.json(user);
        }
        case "DELETE": {
          // Delete an existing user
          const body = JSON.parse(req.body);
          const { id } = body;
          const email = await deleteEmail(id);
          return res.json(email);
        }
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message });
    }
  }
  