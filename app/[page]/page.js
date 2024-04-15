import { PAGE_EX } from '@/config/app'
import React from 'react'
// import AboutScreen from './Component/aboutUs'
// import PageOurService from './Component/ourService'
// import PageProfile from './Component/portfolio'
// import PageHome from './Component/home'
// import PageContactAs from './Component/contactAt'
import dynamic from 'next/dynamic'
const PageContactAs = dynamic(() => import('./Component/contactAt'), { ssr: false })
const PageHome = dynamic(() => import('./Component/home'), { ssr: false })
const PageProfile = dynamic(() => import('./Component/portfolio'), { ssr: false })
const PageOurService = dynamic(() => import('./Component/ourService'), { ssr: false })
const AboutScreen = dynamic(() => import('./Component/aboutUs'), { ssr: false })

const PageScreen = ({ page }) => {
  return (
    <>
      {
        page === PAGE_EX.ourService && (
          <PageOurService />
        )
      }

      {
        page === PAGE_EX.portfolio && (
          <PageProfile />
        )
      }

      {
        page === PAGE_EX.home && (
          <PageHome />
        )
      }

      {
        page === PAGE_EX.aboutUs && (
          <AboutScreen />
        )
      }

      {
        page === PAGE_EX.contactAt && (
          <PageContactAs />
        )
      }
    </>
  )
}

export default PageScreen
