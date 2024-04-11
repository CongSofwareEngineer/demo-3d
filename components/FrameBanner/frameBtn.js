import { OBSERVER_KEY, QUEY_KEY, TYPE_BANNER } from '@/config/app'
import { images } from '@/config/images'
import useSizeScreen from '@/hooks/useSizeScreen'
import ObserverService from '@/utils/observer'
import { useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled, { keyframes } from 'styled-components'

const opacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
const SVGCustom = styled.svg` 
  user-select: none;
  position: fixed;
  z-index: 11;
  bottom: 0;
  height: ${props => props.$height ? `${props.$height}px` : '19%'};
  min-width: 100%;
  /* animation: ${opacity} 0.5s  linear; */
`

const Rects = styled.rect.attrs(() => ({ className: 'cursor-pointer' }))``

const ButtonDetail = ({ id, url, urlClick, typeClick = OBSERVER_KEY.aboutUs }) => {
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.clickBtnFrame, (type) => {
      console.log({ type })
      if (typeClick === type) {
        setIsClick(true)
        setTimeout(() => {
          setIsClick(false)
        }, 100)
      }
    })

    return () => {
      ObserverService.removeListener(OBSERVER_KEY.clickBtnFrame)
    }
  }, [])

  return (

    <>
      <image
        href={url}
        // href={isClick ? urlClick : url}
        // id={isClick ? 'no-data' : id}
        // style={{op}}
        id={isClick ? 'no-data' : id}
        // key={`${id}+${isClick}`}
        width={2560} height={1097}
      />

      <image
        href={urlClick}
        id={!isClick ? 'no-data' : id}
        // id={id}
        width={2560} height={1000}
      />
    </>
  )
}
const FrameBtn = ({ callBackLoad = () => {} }) => {
  const { ratioBeautiful, height, width } = useSizeScreen()
  const isMouseClickRef = useRef(false)
  const queryClient = useQueryClient()

  const [isCLickOurService, setIsCLickOurService] = useState(false)
  const [isCLickAboutUs, setIsCLickAboutUs] = useState(false)
  const [isCLickContact, setIsCLickContact] = useState(false)
  const [isCLickProFile, setIsCLickProFile] = useState(false)
  const [isCLickTree, setIsCLickTree] = useState(false)
  const [heightFrame, setHeightFrame] = useState(queryClient.getQueryData(QUEY_KEY.heightBgFrame))

  useEffect(() => {
    if (!ratioBeautiful) {
      window.addEventListener(('resize'), () => {
        const bgFrame = document.getElementsByClassName('bg-frame-banner')[0]
        if (bgFrame) {
          setTimeout(() => {
            queryClient.setQueryData(QUEY_KEY.heightBgFrame, bgFrame.clientHeight * 0.19)
            setHeightFrame(bgFrame.clientHeight * 0.19)
          }, 100)
        }
      })
      const bgFrame = document.getElementsByClassName('bg-frame-banner')[0]
      if (bgFrame) {
        setTimeout(() => {
          queryClient.setQueryData(QUEY_KEY.heightBgFrame, bgFrame.clientHeight * 0.19)
          setHeightFrame(bgFrame.clientHeight * 0.19)
        }, 100)
      }
    } else {
      queryClient.setQueryData(QUEY_KEY.heightBgFrame, null)
      setHeightFrame(null)
      window.removeEventListener('resize', () => {})
    }
    return () => window.removeEventListener('resize', () => {})
  }, [ratioBeautiful, queryClient])

  const handleClick = (type) => {
    const timeDebone = 200

    if (!isMouseClickRef.current) {
      isMouseClickRef.current = true

      switch (type) {
      case TYPE_BANNER.aboutUs:
        // setIsCLickAboutUs(true)
        // setTimeout(() => {
        //   setIsCLickAboutUs(false)
        // }, timeDebone)
        ObserverService.emit(OBSERVER_KEY.clickBtnFrame, OBSERVER_KEY.aboutUs)

        ObserverService.emit(OBSERVER_KEY.aboutUs)

        break
      case TYPE_BANNER.contact:
        // setIsCLickContact(true)
        // setTimeout(() => {
        //   setIsCLickContact(false)
        // }, timeDebone)
        ObserverService.emit(OBSERVER_KEY.clickBtnFrame, OBSERVER_KEY.contactAt)
        ObserverService.emit(OBSERVER_KEY.contactAt)
        break

      case TYPE_BANNER.profile:
        // setIsCLickProFile(true)
        // setTimeout(() => {
        //   setIsCLickProFile(false)
        // }, timeDebone)
        ObserverService.emit(OBSERVER_KEY.clickBtnFrame, OBSERVER_KEY.portfolio)

        ObserverService.emit(OBSERVER_KEY.portfolio)
        break

      case TYPE_BANNER.tree:
        // setIsCLickTree(true)
        // setTimeout(() => {
        //   setIsCLickTree(false)
        // }, timeDebone)
        ObserverService.emit(OBSERVER_KEY.clickBtnFrame, OBSERVER_KEY.home)

        ObserverService.emit(OBSERVER_KEY.home)
        break

      default:
        // setIsCLickOurService(true)
        // setTimeout(() => {
        //   setIsCLickOurService(false)
        // }, timeDebone)
        ObserverService.emit(OBSERVER_KEY.clickBtnFrame, OBSERVER_KEY.ourService)

        ObserverService.emit(OBSERVER_KEY.ourService)
        break
      }
      setTimeout(() => {
        isMouseClickRef.current = false
      }, timeDebone)
    }
  }

  const renderImage = (id, stateClick, url, urlClick) => {
    return (

      <>
        <image
          style={{ opacity: stateClick ? 0 : 1 }}
          href={url}
          id={stateClick ? 'no-data' : id}
          width="2560" height="1097"
        />

        <image
          href={urlClick}
          id={id}
          width="2560" height="1000"
        />
      </>
    )
  }

  return (
    <SVGCustom
      viewBox="0 0 2560 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      $height={!ratioBeautiful ? heightFrame : null}
      onLoad={() => {
        callBackLoad()
        ObserverService.emit(OBSERVER_KEY.loadContentFrame)
      }}
    >

      <Rects
        onMouseDown={() => handleClick(TYPE_BANNER.ourService)}
        onClick={() => (isMobile ? handleClick(TYPE_BANNER.ourService) : {})}
        x={-3400} y={400} width="1900" height="650"
        fill="url(#pattern0frame)"
      />

      <Rects
        onMouseDown={() => handleClick(TYPE_BANNER.profile)}
        onClick={() => (isMobile ? handleClick(TYPE_BANNER.profile) : {})}
        x={-1650} y={260} width="1900" height="680"
        fill="url(#pattern1frame)"
      />
      <Rects
        onMouseDown={() => handleClick(TYPE_BANNER.aboutUs)}
        onClick={() => (isMobile ? handleClick(TYPE_BANNER.aboutUs) : {})}
        x={2400} y={260} width="1900" height="680"
        fill="url(#pattern2frame)"
      />
      <Rects
        onMouseDown={() => handleClick(TYPE_BANNER.contact)}
        onClick={() => handleClick(TYPE_BANNER.contact)}
        x={4150} y={350} width="1900" height="680"
        fill="url(#pattern3frame)"
      />

      <Rects
        onMouseDown={() => handleClick(TYPE_BANNER.tree)}
        onClick={() => handleClick(TYPE_BANNER.tree)}
        x={800} y={80} width="1000" height="680"
        fill="url(#pattern4frame)"
      />
      <defs>
        <pattern
          id="pattern0frame"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1265_3"
            transform="matrix(0.000370625 0 0 0.001 0 0)"
          />
        </pattern>
        <pattern id="pattern1frame" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_1265_3"
            transform="matrix(0.000370625 0 0 0.001 0 0)"
          />
        </pattern>
        <pattern id="pattern2frame" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2_1265_3"
            transform="matrix(0.000370625 0 0 0.001 0 0)"
          />
        </pattern>

        <pattern id="pattern3frame" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3_1265_3"
            transform="matrix(0.000370625 0 0 0.001 0 0)"
          />
        </pattern>

        <pattern id="pattern4frame" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image4_1265_3"
            transform="matrix(0.0007 0 0 0.001 0 0)"
            x={-590}
          />
        </pattern>

        <ButtonDetail
          id={'image0_1265_3'}
          stateClick={isCLickTree}
          url={images.home.btnOurService}
          urlClick={ images.home.btnOurServiceClick}
          typeClick={OBSERVER_KEY.ourService}
        />

        <ButtonDetail
          id={'image1_1265_3'}
          url={images.home.btnPortFlto}
          urlClick={ images.home.btnPortFltoClick}
          typeClick={OBSERVER_KEY.portfolio}
        />
        {/* {
          renderImage(
            'image1_1265_3',
            isCLickProFile,
            images.home.btnPortFlto,
            images.home.btnPortFltoClick
          )
        } */}

        {/* {
          renderImage(
            'image4_1265_3',
            isCLickTree,
            images.home.btnTree,
            images.home.btnTreeClick
          )
        } */}

        <ButtonDetail
          id={'image4_1265_3'}
          stateClick={isCLickTree}
          url={images.home.btnTree}
          urlClick={ images.home.btnTreeClick}
          typeClick={OBSERVER_KEY.home}
        />
        <ButtonDetail
          id={'image2_1265_3'}
          stateClick={isCLickAboutUs}
          url={images.home.btnAboutUs}
          urlClick={ images.home.btnAboutUsClick}
          typeClick={OBSERVER_KEY.aboutUs}
        />
        {/* {
          renderImage(
            'image2_1265_3',
            isCLickAboutUs,
            images.home.btnAboutUs,
            images.home.btnAboutUsClick
          )
        } */}
        <ButtonDetail
          id={'image3_1265_3'}
          stateClick={isCLickAboutUs}
          url={images.home.btnContact}
          urlClick={ images.home.btnContactClick}
          typeClick={OBSERVER_KEY.contactAt}
        />
        {/*
        {
          renderImage(
            'image3_1265_3',
            isCLickContact,
            images.home.btnContact,
            images.home.btnContactClick
          )
        } */}

      </defs>
    </SVGCustom>
  )
}

export default FrameBtn
