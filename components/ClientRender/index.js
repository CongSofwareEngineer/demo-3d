'use client'
import React, { useLayoutEffect, useState } from 'react'
import MyModal from '../MyModal'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const language = useSelector(state => state.app.language)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient
      ? (
        <IntlProvider defaultLocale={'vi'} locale={language?.locale || 'vn'} messages={language?.messages || {}}>
          {children}
          <MyModal />
        </IntlProvider>
      )
      : (
        <div />
      )

  )
}

export default ClientRender
