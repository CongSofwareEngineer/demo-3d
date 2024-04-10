import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import React, { useEffect, useState } from 'react'
import jsonProfile from '@/public/assets/json/transitions_1.mp4.lottie.json'
import loadingFirstLoad from '@/public/assets/json/loadingFirstLoad.json'
import LoadingRoutePage from '../LoadingRoutePage'

const LoadingMotionPage = () => {
  const [loadingGameArt, setLoadingGameArt] = useState(false)
  const [loadingOurServer, setLoadingOurServer] = useState(false)
  const [loadingAboutUs, setLoadingAboutUs] = useState(false)
  const [loadingProfile, setLoadingProfile] = useState(false)

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadingPageAboutUs, () => {
      setLoadingAboutUs(true)
      setTimeout(() => {
        setLoadingAboutUs(false)
      }, 1000)
    })
    ObserverService.on(OBSERVER_KEY.loadingPageContact, () => setLoadingGameArt(true))
    ObserverService.on(OBSERVER_KEY.loadingPageOurServer, () => {
      setLoadingOurServer(true)
      setTimeout(() => {
        setLoadingOurServer(false)
      }, 1000)
    })
    ObserverService.on(OBSERVER_KEY.loadingPageProfile, () => setLoadingProfile(true))
    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadingPageAboutUs)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageContact)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageOurServer)
      ObserverService.removeListener(OBSERVER_KEY.loadingPageProfile)
    }
  }, [])

  return (
    <>
      {
        loadingGameArt && <LoadingRoutePage src={jsonProfile} />
      }
      {
        loadingOurServer && <LoadingRoutePage src={jsonProfile} />
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
        key={'loadingOurServer-opacity'}
        src={transitionBannerHome}
        fill
      /> */}

    </>
  )
}

export default LoadingMotionPage
