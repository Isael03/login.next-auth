import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {connectDB} from '@/libs/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs';


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "frojas@mail.com" },
                password: { label: "Password", type: "password", placeholder:"*******" }
              },
              async authorize(credentials, req) {
                await connectDB()

                const userFound = await User.findOne({email:credentials?.email}).select("+password")
                
                if(!userFound) throw new Error("Credenciales inválidas")

                const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

                if(!passwordMatch) throw new Error("Credenciales inválidas")

                return userFound
                
              },

        })
    ],
    callbacks:{
      jwt({ token, user}){
        if(user) token.user = user
        return token
      },
      session({session, token, user }){

       session.user!.name = (token.user as any).fullname
    //  session.user = token.user as any 
    
        return  session
      },
  

    },
    pages:{
      signIn: '/login'
    }
    
  })
  
  export { handler as GET, handler as POST }