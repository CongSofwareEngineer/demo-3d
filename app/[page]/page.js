'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import dynamic from 'next/dynamic';
import PageOurService from './Components/pageOurService';
import PageProfile from './Components/pageProfile';
import ObserverService from '@/utils/observer';
import PageAboutUse from './Components/pageAboutUs';
const PageScreen = () => {
  const params = useParams()
  const router = useRouter()

  const clickOurService = () => {
    console.log('====================================');
    console.log('clickOurService');
    console.log('====================================');

    ObserverService.emit(OBSERVER_KEY.loadingPageOurServer)
    setTimeout(() => {
      router.push('/home')
    }, 250)
  }

  const clickProfile = () => {
    console.log('===clickProfile==');
    router.push(PAGE_EX.portfolio)
  }

  const clickAboutUs = () => {
    console.log('clickAboutUs');
    router.push(PAGE_EX.aboutUs)
  }

  const clickContactAs = () => {
    console.log('===clickContactAs=====');
    router.push(PAGE_EX.contactAt)
  }

  return (
    <>
      {
        params?.page === 'home' && (
          <PageOurService
            clickAboutUs={clickAboutUs}
            clickContactAs={clickContactAs}
            clickProfile={clickProfile}
          />
        )
      }
      {
        params?.page === PAGE_EX.portfolio && (
          <PageProfile
            clickAboutUs={clickAboutUs}
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
          />
        )
      }

      {
        params?.page === PAGE_EX.aboutUs && (
          <PageAboutUse
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickProfile={clickProfile}
          />
        )
      }

      {
        params?.page === PAGE_EX.contactAt && (
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
