import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
  } from "../../prisma/users";

  

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

/* eslint-disable */
export default async function handler(req, res) {
    try {
      switch (req.method) {
        case "POST": {
   // create new user
          const body = JSON.parse(req.body);
          const user = await createUser(body);
          return res.json(user);
        }
        case "GET": {
          // Get a single user if email is provided in the query
          const query = req.query;
          if (query.email) {
            const user = await getUserByEmail(query.email);
            return res.json(user);
          }
  
          // Otherwise, fetch all jobs
          const users = await getAllUsers();
          return res.json(users);
        }
        case "PUT": {
          // Update an existing user
          const body = JSON.parse(req.body);
          const { id, ...updateData } = body;
          const user = await updateUser(id, updateData);
          return res.json(user);
        }
        case "DELETE": {
          // Delete an existing user
          const body = JSON.parse(req.body);
          const { id } = body;
          const user = await deleteUser(id);
          return res.json(user);
        }
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message });
    }
  }
  