import { PAGE_EX } from '@/config/app'
import React from 'react'
import AboutScreen from './Component/aboutUs'
import PageOurService from './Component/ourService'
import PageProfile from './Component/portfolio'
import PageHome from './Component/home'
import PageContactAs from './Component/contactAt'

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
