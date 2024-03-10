import { images } from '@/config/images';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
import React, { useEffect, useRef } from 'react';

import styled, { css } from 'styled-components';
const ContainerSVG = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SVGCustom = styled.svg`
  position: absolute !important;
  left: 50% !important;
  right: 50% !important;
  transform: translate(-50%, 0%) !important;
  ${(props) =>
    props.isScale
      ? css`
          min-width: 100vw !important;
          width: auto !important;
        `
      : css`
          min-height: 100vh !important;
          height: auto !important;
        `}

 `;

const RectCustom = styled.rect`
  cursor: pointer;
 `;

const TYPE = {
  ourService: 'ourService',
  aboutUs: 'aboutUs',
  contact: 'contact',
  profile: 'profile'
}
const SvgOurService = () => {
  const { ratioBeautiful } = useSizeScreen()
  const { openModal } = useModal()

  const ourServiceRef = useRef(null)
  const aboutUseRef = useRef(null)
  const contactRef = useRef(null)
  const proFileRef = useRef(null)

  useEffect(() => {
    const ourService = document.querySelector('#rectOurService')
    const aboutUs = document.querySelector('#rectAboutUs')
    const contact = document.querySelector('#rectContact')
    const profile = document.querySelector('#rectProfile')

    ourService.addEventListener('mousedown', (e) => {
      ourServiceRef.current.setAttribute('href', images.home.btnOurServiceClick)
    })
    ourService.addEventListener('mouseup', (e) => {
      ourServiceRef.current.setAttribute('href', images.home.btnOurService)
    })

    profile.addEventListener('mousedown', (e) => {
      proFileRef.current.setAttribute('href', images.home.btnPortFltoClick)
    })
    profile.addEventListener('mouseup', (e) => {
      proFileRef.current.setAttribute('href', images.home.btnPortFlto)
    })

    aboutUs.addEventListener('mousedown', (e) => {
      aboutUseRef.current.setAttribute('href', images.home.btnAboutUsClick)
    })
    aboutUs.addEventListener('mouseup', (e) => {
      aboutUseRef.current.setAttribute('href', images.home.btnAboutUs)
    })

    contact.addEventListener('mousedown', (e) => {
      contactRef.current.setAttribute('href', images.home.btnContactClick)
    })
    contact.addEventListener('mouseup', (e) => {
      contactRef.current.setAttribute('href', images.home.btnContact)
    })
  }, [])

  const handleClick = (type) => {
    let title = 'our Service'
    switch (type) {
    case TYPE.aboutUs:
      title = 'About Us'
      break;
    case TYPE.contact:
      title = 'contact'
      break;
    case TYPE.profile:
      title = 'Our ProtFolto'
      break;
    default:
      title = 'our Service'
      break;
    }
    openModal({
      body: <div>{title}</div>
    });
  }

  const renderImgSvg = (id, url, ref) => {
    return (
      <image
        ref={ref}
        id={id}
        width="355"
        // height="300"
        href={url}
      />
    )
  }

  return (
    <SVGCustom
      viewBox="0 0 2560 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      isScale={!ratioBeautiful}
    >
      <rect width="2560" height="1097" fill="url(#pattern0)" />
      <RectCustom onClick={() => handleClick(TYPE.ourService)} id='rectOurService' x="390" y="960" width="2560" height="1097" fill="url(#pattern2)" />
      <RectCustom onClick={() => handleClick(TYPE.profile)} id='rectProfile' x="730" y="940" width="2560" height="1097" fill="url(#pattern1)" />
      <RectCustom onClick={() => handleClick(TYPE.aboutUs)} id='rectAboutUs' x="1480" y="940" width="2560" height="1097" fill="url(#pattern3)" />
      <RectCustom onClick={() => handleClick(TYPE.contact)} id='rectContact' x="1830" y="960" width="2560" height="1097" fill="url(#pattern4)" />
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
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_1109_3"
            transform="scale(0.000390625 0.000911577)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image2_1109_3"
            transform="scale(0.000390625 0.000911577)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image3_1109_3"
            transform="scale(0.000390625 0.000911577)"
          />
        </pattern>
        <pattern
          id="pattern4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image4_1109_3"
            transform="scale(0.000390625 0.000911577)"
          />
        </pattern>
        <image
          id="image0_1109_3"
          width="2560"
          height="1097"
          href={images.home.bgFrameBase}
        />

        {renderImgSvg('image1_1109_3', images.home.btnPortFlto, proFileRef)}
        {renderImgSvg('image2_1109_3', images.home.btnOurService, ourServiceRef)}
        {renderImgSvg('image3_1109_3', images.home.btnAboutUs, aboutUseRef)}
        {renderImgSvg('image4_1109_3', images.home.btnContact, contactRef)}

      </defs>
    </SVGCustom>
  );
};

export default SvgOurService;
