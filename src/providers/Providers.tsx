'use client'
import React from 'react'
import {SessionProvider, SessionProviderProps} from 'next-auth/react'

interface Props{
    children: React.ReactNode
}


export default function Providers({children}:Props) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
    
  )
}
