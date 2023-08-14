import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@mail.com" },
                password: { label: "Password", type: "password", placeholder:"*******" }
              },
              async authorize(credentials, req) {
               
                const user = { id: "1", fullname: "J Smith", email: "jsmith@example.com" }
                return user
                
              }
        })
    ]
  })
  
  export { handler as GET, handler as POST }