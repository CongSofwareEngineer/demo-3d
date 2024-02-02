'use client'
import React, { useLayoutEffect, useState } from 'react'
import MyModal from '../MyModal'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [isClient])

  return (
    isClient
      ? (
        <>
          {children}
          <MyModal />
        </>
      )
      : (
        <div />
      )
  // <IntlProvider defaultLocale={'vi'} locale={locale?.la || 'vn'} messages={locale?.messages || {}}>

  )
}

export default ClientRender
