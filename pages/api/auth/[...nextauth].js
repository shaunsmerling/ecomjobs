import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  theme: {
    colorScheme: "light",
    logo: "https://ecom-jobs.com/logo.png",
  

  },
  page: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
    providers: [
       GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
      //   GoogleProvider({
      //     clientId: process.env.GOOGLE__CLIENT_ID,
      //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      //   }),
  EmailProvider({
    server: {
      host: "smtp.gmail.com",//process.env.EMAIL_SERVER_HOST,
      port: 465,// process.env.EMAIL_SERVER_PORT,
      auth: {
        user: 'shaun@ecom-jobs.com',//process.env.EMAIL_SERVER_USER,
        pass: 'rosalina2898133',// process.env.EMAIL_SERVER_PASSWORD
      }
    },
    from: 'shaun@ecom-jobs.com'
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
            if (user) {
                token.id = user.id
            }
            return token 
        },
        async session({session, token}) {
            session.user.id = token.id 
            return session
        },
    },
})