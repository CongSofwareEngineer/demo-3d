import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import React, { useEffect, useState } from 'react'
import jsonProfile from '@/public/assets/json/transitions_1.mp4.lottie.json';
import LoadingRoutePage from '../LoadingRoutePage';
import { usePathname } from 'next/navigation';
const LoadingMotionPage = () => {
  const patchName = usePathname()
  const [loadingGameArt, setLoadingGameArt] = useState(false)
  const [loadingOurServer, setLoadingOurServer] = useState(false)
  const [loadingAboutUs, setLoadingAboutUs] = useState(false)
  const [loadingProfile, setLoadingProfile] = useState(false)

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadingPageAboutUs, () => setLoadingAboutUs(true))
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
    setTimeout(() => {
      setLoadingOurServer(false)
    }, 1000)
  }, [loadingOurServer])

  return (
    <>
      {
        loadingGameArt && <LoadingRoutePage src={jsonProfile} />
      }
      {
        loadingOurServer && <LoadingRoutePage src={jsonProfile} />
      }
      {
        loadingAboutUs && <LoadingRoutePage src={jsonProfile} />
      }
      {
        loadingProfile && <LoadingRoutePage src={jsonProfile} />
      }
    </>
  )
}

export default LoadingMotionPage
