import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export default function uselogin() {
  const [error, setError] = useState<string>("")

  const router = useRouter()

  async function handleSubmit(e:FormEvent<HTMLFormElement>){

    e.preventDefault()

    const formdata = new FormData(e.currentTarget)

    const email = formdata.get('email')
    const password = formdata.get('password')

    try {
        // Loguear Usuario y redirigirlo
        const res = await signIn('credentials',{
          email:email?.toString().trim(),
          password: password?.toString().trim(),
          redirect:false,
        })
  
        
        if(res?.error) return setError(res?.error as string)
        if(res?.ok) return router.push("/dashboard")
    } catch (error) {
      console.log(error);
    }
    
  }
  return {
    error,
    handleSubmit
  }
}
