"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status,  } = useSession();

  console.log(session);
  
  const name = session?.user?.name

  return <div className="flex justify-center flex-col items-center gap-y-5 mt-4">
    <h1 className="font-bold text-3xl">Dashboard</h1>
    <h2 className="text-2xl">Bienvenido {name} </h2>

    <pre className="bg-zinc-800 p-4 ">{JSON.stringify({
      session,
      status
    })}</pre>
  </div>;
}
