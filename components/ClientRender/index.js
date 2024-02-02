'use client'
import React, { useLayoutEffect, useState } from 'react'
import MyModal from '../MyModal'
import ReduxServices from '@/Redux/service'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const language = useSelector(state => state.app.language)

  useLayoutEffect(() => {
    setIsClient(true)
    ReduxServices.setLanguage(null)
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
  // <IntlProvider defaultLocale={'vi'} locale={locale?.la || 'vn'} messages={locale?.messages || {}}>

  )
}

export default ClientRender
