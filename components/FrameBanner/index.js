import { images } from '@/config/images'
import useModal from '@/hooks/useModal'
import useSizeScreen from '@/hooks/useSizeScreen'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'

import styled from 'styled-components'
import Frame2 from './frame2'

const SVGCustom = styled.svg`
  /* min-height: 100vh; */
  /* min-width: 110vw;
  position: absolute;
  inset: unset;
  bottom: 0;
  width: auto;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%); */
  position: absolute;
  width: 100%;
  z-index: 99;
  bottom: 0;
`

const RectCustom = styled.rect`
  cursor: pointer;
`
const ContainerBgFrame = styled.div`
  position: absolute;
  bottom: 0 !important;
  width: auto !important;
  left: 50% !important;
  right: 50% !important;
`

const ContainerBgSVG = styled.div`
  position: relative;
`

const BgSVG = styled(Image)`
  position: relative !important;
  width: 100% !important;
  min-width: 110vw !important;
  width: auto !important;
  min-height: 100vh !important;
  height: auto !important;
  margin-left: 50% !important;
  max-width: none !important;
  transform: translate(-50%, 0%) !important;

  /* position: absolute;
  inset: unset !important;
  bottom: 0 !important;
  width: auto !important;
  left: 50% !important;
  right: 50% !important;
  transform: translate(-50%, 0%) !important;
  max-width: none !important;
  width: ${(props) => props.w};
  height: ${(props) => props.h}; */
  /* min-height: 100vh !important;
  min-width: 110vw !important;
  position: relative;
  inset: unset !important;
  bottom: 0 !important;
  width: auto !important;
  margin-left: 50% !important;
  margin-right: 50% !important;
  max-width: none !important;
  transform: translate(-50%, 0%);  */
`

const TYPE = {
  ourService: 'ourService',
  aboutUs: 'aboutUs',
  contact: 'contact',
  profile: 'profile'
}
const FrameBanner = () => {
  const { ratioBeautiful } = useSizeScreen()
  const { openModal } = useModal()
  const isMouseClickRef = useRef(false)
  const svgRef = useRef(null)
  const bgSvg = useRef(null)

  const [isCLickOurService, setIsCLickOurService] = useState(false)
  const [isCLickAboutUs, setIsCLickAboutUs] = useState(false)
  const [isCLickContact, setIsCLickContact] = useState(false)
  const [isCLickProFileRef, setIsCLickProFileRef] = useState(false)
  const [dataFrame, setDataFrame] = useState({
    w: 0,
    h: 0
  })

  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   console.log({ width: svgRef.current.clientHeight });
    //   setDataFrame({
    //     w: `${svgRef.current.clientWidth}px !important`,
    //     h: `${svgRef.current.clientHeight}px !important`
    //   });
    // });
    // if (svgRef.current) {
    //   setDataFrame({
    //     w: `${svgRef.current.clientWidth}px !important`,
    //     h: `${svgRef.current.clientHeight}px !important`
    //   });
    // }
  }, [])

  const handleClick = (type) => {
    const timeDebone = 200
    if (!isMouseClickRef.current) {
      isMouseClickRef.current = true
      let title = 'our Service'
      switch (type) {
      case TYPE.aboutUs:
        setIsCLickAboutUs(true)
        setTimeout(() => {
          setIsCLickAboutUs(false)
        }, timeDebone)
        title = 'About Us'
        break
      case TYPE.contact:
        setIsCLickContact(true)
        setTimeout(() => {
          setIsCLickContact(false)
        }, timeDebone)
        title = 'contact'
        break
      case TYPE.profile:
        setIsCLickProFileRef(true)
        setTimeout(() => {
          setIsCLickProFileRef(false)
        }, timeDebone)
        title = 'Our ProtFolto'
        break
      default:
        setIsCLickOurService(true)
        setTimeout(() => {
          setIsCLickOurService(false)
        }, timeDebone)
        title = 'our Service'
        break
      }
      setTimeout(() => {
        isMouseClickRef.current = false
      }, timeDebone)
      openModal({
        body: <div>{title}</div>
      })
    }
  }

  const renderImgSvg = (id, stateClick, url, urlClick) => {
    return (
      <>
        <image
          id={!stateClick ? id : 'no-data'}
          key={'no_image2_1109_3'}
          height={100}
          style={{ opacity: stateClick ? 0 : 1 }}
          href={url}
        />
        <image id={id} height={95} key={`${stateClick}`} href={urlClick} />
      </>
    )
  }

  const renderSVG2 = () => {
    return (
      <SVGCustom
        viewBox="0 0 2560 1097"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        isScale={!ratioBeautiful}
        ref={svgRef}
      >
        <rect width="200" height="252" fill="url(#pattern0)" />
        {/* <rect width="2560" height="252" fill="url(#pattern1)"/>
        <rect width="2560" height="252" fill="url(#pattern2)"/>
        <rect width="2560" height="252" fill="url(#pattern3)"/> */}
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1265_3"
              transform="matrix(0.000380625 0 0 0.000396825 0 0)"
            />
          </pattern>
          {/* <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image1_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image2_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
          </pattern>
          <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image3_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
          </pattern> */}
          <image
            href={images.home.btnOurService}
            id="image0_1265_3"
            // width="2560"
            height="1097"
          />
          {/* <image id="image1_1265_3" width="2560" height="1097"/>
          <image id="image2_1265_3" width="2560" height="1097" />
          <image id="image3_1265_3" width="2560" height="1097" /> */}
        </defs>
      </SVGCustom>
    )
  }

  const renderSVGBase = () => {
    return (
      <SVGCustom
        viewBox="0 0 2560 1097"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        isScale={!ratioBeautiful}
        ref={svgRef}
      >
        <rect width="2560" height="1097" fill="url(#pattern0)" />
        <RectCustom
          onMouseDown={() => handleClick(TYPE.ourService)}
          onClick={() => (isMobile ? handleClick(TYPE.ourService) : {})}
          id="rectOurService"
          x="395"
          y="965"
          width="350"
          height="120"
          fill="url(#pattern22)"
        />
        <RectCustom
          onMouseDown={() => handleClick(TYPE.profile)}
          onClick={() => (isMobile ? handleClick(TYPE.profile) : {})}
          id="rectProfile"
          x="720"
          y="945"
          width="350"
          height="120"
          fill="url(#pattern1framemain)"
        />

        <RectCustom
          onMouseDown={() => handleClick(TYPE.aboutUs)}
          onClick={() => (isMobile ? handleClick(TYPE.aboutUs) : {})}
          id="rectAboutUs"
          x="1480"
          y="940"
          width="350"
          height="120"
          fill="url(#pattern33)"
        />
        <RectCustom
          onMouseDown={() => handleClick(TYPE.contact)}
          onClick={() => (isMobile ? handleClick(TYPE.contact) : {})}
          id="rectContact"
          x="1830"
          y="960"
          width="350"
          height="120"
          fill="url(#pattern44)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1109_3"
              transform="scale(0.000390625 0.000911577)"
            />
          </pattern>
          <pattern
            id="pattern1framemain"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_1109_3"
              transform="scale(0.00390625 0.011)"
            />
          </pattern>
          <pattern
            id="pattern22"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_1109_3"
              transform="scale(0.00390625 0.011)"
            />
          </pattern>
          <pattern
            id="pattern33"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image3_1109_3"
              transform="scale(0.00390625 0.011)"
            />
          </pattern>
          <pattern
            id="pattern44"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image4_1109_3"
              transform="scale(0.00390625 0.011)"
            />
          </pattern>

          {renderImgSvg(
            'image2_1109_3',
            isCLickOurService,
            images.home.btnOurService,
            images.home.btnOurServiceClick
          )}
          {renderImgSvg(
            'image1_1109_3',
            isCLickProFileRef,
            images.home.btnPortFlto,
            images.home.btnPortFltoClick
          )}

          {renderImgSvg(
            'image3_1109_3',
            isCLickAboutUs,
            images.home.btnAboutUs,
            images.home.btnAboutUsClick
          )}

          {renderImgSvg(
            'image4_1109_3',
            isCLickContact,
            images.home.btnContact,
            images.home.btnContactClick
          )}
        </defs>
      </SVGCustom>
    )
  }
  return <Frame2 />

  // return (
  //   <ContainerBgFrame >
  //     <ContainerBgSVG>
  //       <BgSVG
  //         ref={bgSvg}
  //         id="bg-svg"
  //         fill
  //         w={dataFrame.w}
  //         h={dataFrame.h}
  //         src={images.home.bgFrameBase}
  //       />
  //       {renderSVG2()}
  //     </ContainerBgSVG>
  //   </ContainerBgFrame>

  // );
}

export default React.memo(FrameBanner)
