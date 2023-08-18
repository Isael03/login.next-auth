'use client'

import { FormEvent, useState } from 'react';
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Link from 'next/link';

export default function LoginPage() {

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
  return (
    <div>

      {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
      <h1>Signin</h1>
      <form  onSubmit={handleSubmit}>
    
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
      <button type="submit" className="bg-indigo-500 px-4 py-2">Login</button>
      </form>
      <Link href="register">Registrarse</Link>

    </div>
  );
}
