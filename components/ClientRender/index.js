'use client'
import React, { useCallback, useEffect, useLayoutEffect, useState, useRef, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
// import Container from '../Container'
import { usePathname } from 'next/navigation'
import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import ObserverService from '@/utils/observer'
import useRouter from '@/hooks/useRouter'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'

const LoadingMotionPage = dynamic(() => import('../LoadingMotionPage'))
const FrameMain = dynamic(() => import('../FrameMain'))
const MyModal = dynamic(() => import('../MyModal'))

const ClientRender = ({ children }) => {
  const language = useSelector((state) => state.app.language)
  const router = useRouter()
  const patchName = usePathname()
  const urlSelected = useRef('')

  useLayoutEffect(() => {
    urlSelected.current = patchName.slice(1)
  }, [patchName])

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.aboutUs, () => callBackRoutePage(PAGE_EX.aboutUs))
    ObserverService.on(OBSERVER_KEY.contactAt, () => callBackRoutePage(PAGE_EX.contactAt))
    ObserverService.on(OBSERVER_KEY.ourService, () => callBackRoutePage(PAGE_EX.ourService))
    ObserverService.on(OBSERVER_KEY.home, () => callBackRoutePage(PAGE_EX.home))
    ObserverService.on(OBSERVER_KEY.portfolio, () => callBackRoutePage(PAGE_EX.portfolio))

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.aboutUs)
      ObserverService.removeListener(OBSERVER_KEY.contactAt)
      ObserverService.removeListener(OBSERVER_KEY.ourService)
      ObserverService.removeListener(OBSERVER_KEY.home)
      ObserverService.removeListener(OBSERVER_KEY.portfolio)
    }
  }, [])

  const callBackRoutePage = useCallback((url) => {
    if (!urlSelected.current.includes(url)) {
      switch (url) {
      case PAGE_EX.ourService:
        ObserverService.emit(OBSERVER_KEY.loadingPageOurServer)

        break

      default:
        break
      }
      router.push(url)
    }
  }, [])

  return (
    <>
      <IntlProvider
        defaultLocale={'vi'}
        locale={language?.locale || 'vn'}
        messages={language?.messages || {}}
      />

      {children}
      <FrameMain />
      <LoadingMotionPage />
      <MyModal />
      <ToastContainer />
    </>
  )
}

export default ClientRender
