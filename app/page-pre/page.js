'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import ObserverService from '@/utils/observer'
import PageHome from './Components/pageHome'

import PageAboutUse from './Components/pageAboutUs'
import PageOurService from './Components/pageOurService'
import PageProfile from './Components/pageProfile'
import Fiber3D from '@/components/Fiber3D'
import PageContactAs from './Components/pageContactAs'

const PageScreen = () => {
  const router = useRouter()
  const params = useParams()

  const [loadingFirstPage, setLoadingFirstPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingFirstPage(false)
    }, 2000)
  }, [])

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

  const clickContactAs = () => {
    router.push(PAGE_EX.contactAt)
  }

  const clickPageHome = () => {
    router.push(PAGE_EX.home)
  }

  const renderData = () => {
    return (
      <Suspense >
        {
          (params?.page === '' || params?.page === '/') && (
            <Fiber3D />
          )
        }
        {
          params?.page === PAGE_EX.home && (
            <PageHome
              clickAboutUs={clickAboutUs}
              clickContactAs={clickContactAs}
              clickProfile={clickProfile}
              clickOurService={clickOurService}
            />
          )
        }
        {
          params?.page === PAGE_EX.ourService && (
            <PageOurService
              clickAboutUs={clickAboutUs}
              clickContactAs={clickContactAs}
              clickProfile={clickProfile}
              clickPageHome={clickPageHome}
            />
          )
        }
        {
          params?.page === PAGE_EX.portfolio && (
            <PageProfile
              clickOurService={clickOurService}
              clickAboutUs={clickAboutUs}
              clickContactAs={clickContactAs}
              clickPageHome={clickPageHome}
            />

          )
        }

        {
          params?.page === PAGE_EX.aboutUs && (
            <PageAboutUse
              clickContactAs={clickContactAs}
              clickOurService={clickOurService}
              clickProfile={clickProfile}
              clickPageHome={clickPageHome}
            />
          )
        }

        {
          params?.page === PAGE_EX.contactAt && (
            <PageContactAs
              clickAboutUs={clickAboutUs}
              clickOurService={clickOurService}
              clickProfile={clickProfile}
              clickPageHome={clickPageHome}
            />
          )
        }

      </Suspense>
    )
  }

  return renderData()
}

export default PageScreen
