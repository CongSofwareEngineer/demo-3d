'use client'
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import Container from '../Container'
import LoadingFrame from '../LoadingFrame'
import LoadingRoutePage from '../LoadingRoutePage'
import LoadingMotionPage from '../LoadingMotionPage'
import { useParams } from 'next/navigation'
import { PAGE_EX } from '@/config/app'
import { Spin } from 'antd'
import LoadingFirst from '../LoadingFirstPage'
const LoadingUI = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' >
      <Spin />
    </div>
  )
}
const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [loadingFirstPage, setLoadingFirstPage] = useState(true)

  const language = useSelector((state) => state.app.language)
  const params = useParams()

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoadingFirstPage(false)
    }, 2000)
  }, [])

  return (
    <Container>
      <IntlProvider
        defaultLocale={'vi'}
        locale={language?.locale || 'vn'}
        messages={language?.messages || {}}
      >
        {isClient && <>
          {children}

        </>}
        {
          PAGE_EX[params?.page] && (
            <LoadingFrame />
          )
        }
        {
          loadingFirstPage && (
            <LoadingFirst/>
          )
        }

        <LoadingMotionPage />
      </IntlProvider>
    </Container>
  )
}

export default ClientRender
