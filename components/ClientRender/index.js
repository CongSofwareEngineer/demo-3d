'use client'
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import Container from '../Container'
import LoadingFrame from '../LoadingFrame'
import LoadingRoutePage from '../LoadingRoutePage'
import LoadingMotionPage from '../LoadingMotionPage'
import { useParams } from 'next/navigation'
import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import { Spin } from 'antd'
import LoadingFirst from '../LoadingFirstPage'
import ObserverService from '@/utils/observer'
import useRouter from '@/hooks/useRouter'

const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [loadingFirstPage, setLoadingFirstPage] = useState(true)

  const language = useSelector((state) => state.app.language)
  const params = useParams()
  const router = useRouter()

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoadingFirstPage(false)
    }, 3000)

    const clickOurService = () => {
      ObserverService.emit(OBSERVER_KEY.loadingPageOurServer)
      router.push(PAGE_EX.ourService)
    }

    const clickProfile = () => {
      router.push(PAGE_EX.portfolio)
    }

    const clickAboutUs = () => {
      router.push(PAGE_EX.aboutUs)
    }

    const clickContactAt = () => {
      router.push(PAGE_EX.contactAt)
    }

    const clickPageHome = () => {
      router.push(PAGE_EX.home)
    }

    ObserverService.on(OBSERVER_KEY.aboutUs, clickAboutUs)
    ObserverService.on(OBSERVER_KEY.contactAt, clickContactAt)
    ObserverService.on(OBSERVER_KEY.ourService, clickOurService)
    ObserverService.on(OBSERVER_KEY.home, clickPageHome)
    ObserverService.on(OBSERVER_KEY.portfolio, clickProfile)

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.aboutUs)
      ObserverService.removeListener(OBSERVER_KEY.contactAt)
      ObserverService.removeListener(OBSERVER_KEY.ourService)
      ObserverService.removeListener(OBSERVER_KEY.home)
      ObserverService.removeListener(OBSERVER_KEY.portfolio)
    }
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
