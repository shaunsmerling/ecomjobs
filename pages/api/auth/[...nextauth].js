import NextAuth from "next-auth" 
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google"
import nodemailer from 'nodemailer';


// function html(params) {
//   const { url, host, theme } = params

//   const escapedHost = host.replace(/\./g, "&#8203;.")

//   const brandColor = theme.brandColor || "#346df1"
//   const color = {
//     background: "#f9f9f9",
//     text: "#444",
//     mainBackground: "#fff",
//     buttonBackground: brandColor,
//     buttonBorder: brandColor,
//     buttonText: theme.buttonText || "#fff",
//   }

//   return `
// <body style="background: ${color.background};">
//   <table width="100%" border="0" cellspacing="20" cellpadding="0"
//     style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
//     <tr>
//       <td align="center"
//         style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//         Sign in to <strong>${escapedHost}</strong>
//       </td>
//     </tr>
//     <tr>
//       <td align="center" style="padding: 20px 0;">
//         <table border="0" cellspacing="0" cellpadding="0">
//           <tr>
//             <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
//                 target="_blank"
//                 style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
//                 in</a></td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//     <tr>
//       <td align="center"
//         style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//         If you did not request this email you can safely ignore it.
//       </td>
//     </tr>
//   </table>
// </body>
// `
// }

// /** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
// function text({ url, host }) {
//   return `Sign in to ${host}\n${url}\n\n`
// }


export default NextAuth({
  theme: {
    colorScheme: "light",
    logo: "https://ecomportal.co/logo.png",
  

  },
  pages: {
    signIn: "/login",
    verifyRequest: '/auth/verify-request',
    newUser: '/'
  },
    providers: [
        // CredentialProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: "email", type: "email" },
        //         password: { label: "password", type: "password" }
        //     },
            
        //      async authorize(credentials, req) {

        //       const res = await fetch(`/api/users`, {
        //         method: 'GET',
        //         headers: {
        //           'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(credentials)
        //       });



        
        //   const user = { email: credentials?.username, password: credentials?.password }
        //     if (user) {
        //         return user
        //     } else {
        //         return null
        //     }

            
        //     }
        // }), 
      //  GithubProvider({
      //       clientId: process.env.GITHUB_ID,
      //       clientSecret: process.env.GITHUB_SECRET,
      //   }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
  EmailProvider({
    server: {
      host: "smtp.gmail.com",//process.env.EMAIL_SERVER_HOST,
      port: 465,// process.env.EMAIL_SERVER_PORT,
      auth: {
        user: 'shaun@ecomportal.co',//process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_PW,// process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: 'shaun@ecomportal.co',
  //  sendVerificationRequest({
  //     identifier: email,
  //     url,
  //     provider: { server, from },
  //  }) {
  //     const { host } = new URL(url);
  //     const transport = nodemailer.createTransport(server);
  //     transport.sendMail({
  //        to: email,
  //        from,
  //        subject: `Sign in to Ecomportal`,
  //        text: text({ url, host }),
  //        html: html({ url, host, email }),
  //     });
  //   },
  }),
    ],
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'ejserver'
      }),
    database: process.env.DB_URL, 
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: "rosalinarosalinarowerwerwerwe",
    },
    callbacks: {
        async jwt({token, user}) {
          // first time jwt is run, this user object will be available 
            if (user) {
                token.id = user.id
            }
            return token 
        },
        async session({session, token}) {
          if (session) {
            session.id = token.id
          }
            
            return session
        },
     
    },
})