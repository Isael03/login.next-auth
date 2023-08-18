'use client'
import axios, {AxiosError} from 'axios';
import { FormEvent, useState } from 'react';
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'

export default function RegisterPage() {

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
  return (
    <div>

      {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
      <h1>Signup</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Fernando Olivera"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="fernando@email.com"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          className="bg-zinc-800 px-4 py-2 block mb-2"
        />
      <button type="submit" className="bg-indigo-500 px-4 py-2">Registro</button>
      </form>

    </div>
  );
}
