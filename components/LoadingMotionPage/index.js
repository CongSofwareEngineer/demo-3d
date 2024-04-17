import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import LoadingRoutePage from '../LoadingRoutePage'
import jsonProfile from '@/public/assets/json/transitions_1.mp4.lottie.json'
import { usePathname } from 'next/navigation'

// import MotionOurService from '../LoadingRoutePage/MotionOurService'
import dynamic from 'next/dynamic'
const MotionOurService = dynamic(() => import('../LoadingRoutePage/MotionOurService'))

// import styled from 'styled-components'

// const ImageOpacity = styled(Image)`
//   position: absolute !important;
//   height: 0px !important;
//   width: 0px !important;
//   opacity: 0 !important;
//   z-index: -9999999999;
//  `

const LoadingMotionPage = () => {
  const patchName = usePathname()

  const [loadingGameArt, setLoadingGameArt] = useState(false)
  const [loadingOurServer, setLoadingOurServer] = useState(false)
  const [loadingAboutUs, setLoadingAboutUs] = useState(false)
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadingPageAboutUs, () => {
      setLoadingAboutUs(true)
      setTimeout(() => {
        setLoadingAboutUs(false)
      }, 1000)
    })
    ObserverService.on(OBSERVER_KEY.loadingPageContact, () => setLoadingGameArt(true))
    ObserverService.on(OBSERVER_KEY.loadingPageOurServer, () => setLoadingOurServer(true))
    ObserverService.on(OBSERVER_KEY.loadingPageProfile, () => setLoadingProfile(true))
    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadingPageAboutUs)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageContact)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageOurServer)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageProfile)
    }
  }, [])

  useEffect(() => {

  }, [patchName])

  return (
    isClient && <>
      {
        loadingGameArt && <LoadingRoutePage src={jsonProfile} />
      }
      {/* {
        loadingOurServer && <LoadingRoutePage src={jsonProfile} />
      } */}
      {
        loadingOurServer && (
          <MotionOurService callBackSuccess={() => setLoadingOurServer(false)}/>
        )
      }

      {/* <LoadingRoutePage src={jsonProfile} /> */}
      {/* {
        loadingOurServer && (
          <div key={Date.now()} className='fixed inset-0 w-screen h-screen z-[100]'>
            <ImageCustom $isScale={!ratioBeautiful} src={transitionBannerHome} fill/>
          </div>
        )
      } */}

      {
        loadingAboutUs && <LoadingRoutePage src={jsonProfile} />
      }
      {
        loadingProfile && <LoadingRoutePage src={jsonProfile} />
      }
      {/* <ImageOpacity
        src={images.contactAt.bannerContactAt}
        fill
        alt='image-ImageOpacit1'
        loading='lazy'
      />

      <ImageOpacity
        src={images.home.bannerPreload}
        fill
        alt='image-ImageOpacit2'
        loading='lazy'

      />

      <ImageOpacity
        src={images.home.banner2Preload}
        fill
        alt='image-ImageOpacit3'
        loading='lazy'

      />

      <ImageOpacity
        src={images.home.aboutUsPreload}
        fill
        alt='image-ImageOpacit4'
        loading='lazy'

      />

      <ImageOpacity
        src={images.home.profilePreload}
        fill
        alt='image-ImageOpacit5'
        loading='lazy'

      /> */}

    </>
  )
}

export default LoadingMotionPage
