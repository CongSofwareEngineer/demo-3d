'use client'
import { getCurrentBrowserLanguage } from '@/utils/language'
import React, { useLayoutEffect, useState } from 'react'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  useLayoutEffect(() => {
    setIsClient(true)
    console.log({ la: getCurrentBrowserLanguage() });
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {isClient && children }
    </main>
  )
}

export default ClientRender
