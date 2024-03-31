'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import ObserverService from '@/utils/observer';
import PageHome from './Components/pageHome';

import PageAboutUse from './Components/pageAboutUs';
import PageOurService from './Components/pageOurService';
import PageProfile from './Components/pageProfile';

const PageScreen = ({ page }) => {
  const router = useRouter()

  const clickOurService = () => {
    ObserverService.emit(OBSERVER_KEY.loadingPageOurServer)
    setTimeout(() => {
      router.push(PAGE_EX.ourService)
    }, 250)
  }

  const clickProfile = () => {
    router.push(PAGE_EX.portfolio)
  }

  const clickAboutUs = () => {
    router.push(PAGE_EX.aboutUs)
  }

  const clickContactAs = () => {
    // router.push(PAGE_EX.contactAt)
  }

  return (
    <>
      {
        page === PAGE_EX.home && (
          <PageHome
            clickAboutUs={clickAboutUs}
            clickContactAs={clickContactAs}
            clickProfile={clickProfile}
            clickOurService={clickOurService}
          />
        )
      }
      {
        page === PAGE_EX.ourService && (
          <PageOurService
            clickAboutUs={clickAboutUs}
            clickContactAs={clickContactAs}
            clickProfile={clickProfile}
          />
        )
      }
      {
        page === PAGE_EX.portfolio && (
          <PageProfile
            clickOurService={clickOurService}
            clickAboutUs={clickAboutUs}
            clickContactAs={clickContactAs}
          />
        )
      }

      {
        page === PAGE_EX.aboutUs && (
          <PageAboutUse
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickProfile={clickProfile}
          />
        )
      }

      {
        page === PAGE_EX.contactAt && (
          <PageAboutUse
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickProfile={clickProfile}
          />
        )
      }

    </>
  )
}

export default PageScreen
