'use client';
import React, { Suspense, useLayoutEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import Container from '../Container'
import LoadingFrame from '../LoadingFrame';
import LoadingRoutePage from '../LoadingRoutePage';
import LoadingMotionPage from '../LoadingMotionPage';
import { useParams } from 'next/navigation';
import { PAGE_EX } from '@/config/app';
import { Spin } from 'antd';
const LoadingUI = () => {
  return (
    <div className='w-full h-full flex justify-center items-center' >
      <Spin />
    </div>
  )
}
const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  const language = useSelector((state) => state.app.language)
  const params = useParams()

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Suspense fallback={<LoadingUI />}>
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

          <LoadingMotionPage />
        </IntlProvider>
      </Container>
    </Suspense>
  );
};

export default ClientRender;
