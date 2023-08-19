import axios, { AxiosError } from "axios"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function useRegister(){
    const [error, setError] = useState()

    const router = useRouter()
    const {update}= useSession()
  
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
  
      e.preventDefault()
  
      const formdata = new FormData(e.currentTarget)
  
      const email = formdata.get('email')
      const fullname = formdata.get('fullname')
      const password = formdata.get('password')
  
      try {
        const resSignup = await axios.post('/api/auth/signup', {email, password, fullname})
  
        // Loguear Usuario y redirigirlo
        const res = await signIn('credentials',{
          email:resSignup.data.email,
          password: password,
          redirect:false,
          //callbackUrl:"/dashboard",
        })
  
        update({name: fullname, email: resSignup.data.email })
  
        if(res?.ok) return router.push("/dashboard")
      } catch (error) {
  
        if(error instanceof AxiosError) {
          setError(error.response?.data.message)
       
        }
      }
      
    }

    return {
        error, 
        handleSubmit
    }
}