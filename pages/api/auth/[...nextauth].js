import NextAuth from "next-auth" 
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import Email from "next-auth/providers/email";
import api_url from "../../../config"



export default NextAuth({
  theme: {
    colorScheme: "light",
    logo: "https://ecomportal.co/logo.png",
  

  },
  page: {
    signIn: "/signup",
    signOut: "/auth/signout",
    verifyRequest: '/auth/verify-request',
  },
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
             async authorize(credentials) {

              const res = await fetch(`/api/users`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
              });

              let data = await res.json();

        
          const user = { email: credentials?.username, password: credentials?.password }
            if (user) {
                return user
            } else {
                return null
            }

            
            }
        }), 
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
        pass: process.env.EMAIL_PWA,// process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: 'shaun@ecomportal.co'
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