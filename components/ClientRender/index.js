'use client'
import React, { useLayoutEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal'

const ClientRender = ({ children }) => {
  const locale = useSelector(state => state?.app?.language)
  const [isClient, setIsClient] = useState(false)
  useLayoutEffect(() => {
    setIsClient(true)
  }, [isClient])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {
        isClient
          ? (
            <>
              {children}
              <MyModal />
            </>
          )
          : (
            <></>
          )
      }
    </main>
    // <IntlProvider defaultLocale={'vi'} locale={locale?.la || 'vn'} messages={locale?.messages || {}}>

  )
}

export default ClientRender
