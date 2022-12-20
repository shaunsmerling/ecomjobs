import {
  createUser,
  getUserByEmail,
} from "../../prisma/users";
import bcrypt from "bcrypt"


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


const validateEmail = (email) => {
const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
return regEx.test(email);
}

const validateForm = async () => {
if (accpassword.length < 8) {
  return {error: "Password length must be greater than 8 characters"}
}

if (!validateEmail(email)) {
  return {error: "Email is not valid"}
}

const emailUser = await getUserByEmail({email: email})

if (emailUser) {
  return {error: "Email already exists"}
}

return  null;
}

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        // Create a new user
        const { name, email, accpassword } = req.body
        const errorMessage = await validateForm(name, email, accpassword);

          if (errorMessage) {
            return res.status(400).json(errorMessage)
          }

        const newUser = await createUser({
          name,
          email,
          accpassword
        });

        newUser
        .save()
        .then(() => res.status(200).json("User added!"))
        .catch((err) => res.status(400).json("Error: " + err));
      }
    }
  } catch (error) {
      return res.status(500).json({ ...error, message: error.message });
    }
  }


