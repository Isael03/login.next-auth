'use client'

import React from "react";
import Link from "next/link";
//import { getServerSession } from "next-auth";
import { signOut , useSession } from "next-auth/react";


export default  function Navbar() {
  const session = useSession();

  return (
    <nav className="bg-gray-900	 p-4">
      <div className=" flex justify-between container mx-auto">
        <h1 className="font-bold text-xl">
          <Link href="/"> NextAuth</Link>
        </h1>

        <ul className="flex gap-x-2">
          {session.data?.user ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li className="px-3 py-1">
              <button onClick={()=> signOut()}>Cerrar Sesión</button>
             
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">Acerca de</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/login">Login</Link>
              </li>

              <li className="px-3 py-1">
              
                <Link href="/register">Registro</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
