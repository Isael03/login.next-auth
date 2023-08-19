'use client'

import useRegister from './hooks/useRegister.hook';

export default function RegisterPage() {

  const {error, handleSubmit} =useRegister() 
  
  return (
    <div className='h-1/4 flex justify-center items-center mt-4'>

      <form className='bg-neutral-950 px-8 py-10 w-3/12' onSubmit={handleSubmit}>
      {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

      <h1 className='text-4xl font-bold mb-7'>Registro</h1>

        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Fernando Olivera"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full rounded"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="fernando@email.com"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full rounded"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full rounded"
        />
      <button type="submit" className="bg-yellow-600 px-4 py-2 mt-4 w-full rounded">Registro</button>
      </form>

    </div>
  );
}
