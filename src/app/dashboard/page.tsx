"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status,  } = useSession();

  console.log(session);
  
  const name = (session?.user?.name)

  return <div>
    <h1 >Dashboard</h1>
    <h2>Bienvenido {name} </h2>

    <pre>{JSON.stringify({
      session,
      status
    })}</pre>
  </div>;
}
