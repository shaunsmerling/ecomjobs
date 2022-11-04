import {
  getAllCompanies,
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../../prisma/company";


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
        // Create a new company
        const body = JSON.parse(req.body);
        const company = await createCompany(body);
        return res.json(company);
      }
      case "GET": {
        // Get a single company if id is provided is the query
        // api/jobs?id=1
        const query = req.query;
        if (query.id) {
          const company = await getCompanyById(query.id);
          return res.json(company);
        }

        // Otherwise, fetch all companies
        const companies = await getAllCompanies();
        return res.json(companies);
      }
      case "PUT": {
        // Update an existing job
        const body = JSON.parse(req.body);
        const { id, ...updateData } = body;
        const user = await updateCompany(id, updateData);
        return res.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const body = JSON.parse(req.body);
        const { id } = body;
        const company = await deleteCompany(id);
        return res.json(company);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
