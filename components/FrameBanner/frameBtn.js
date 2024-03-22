import { OBSERVER_KEY, TYPE_BANNER } from '@/config/app';
import { images } from '@/config/images'
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
import ObserverService from '@/utils/observer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

const SVGCustom = styled.svg` 
  position: absolute;
  /* width: 100%; */
  z-index: 99;
  bottom: 0;
  /* background: #323e3e80 !important; */
  height: ${props => props.$height ? `${props.$height}px` : '19%'};
  min-width: 100vw;
`;

const Rects = styled.rect.attrs(() => ({ className: 'cursor-pointer' }))``

const FrameBtn = ({ callBackLoad = () => {} }) => {
  const { ratioBeautiful } = useSizeScreen()
  const isMouseClickRef = useRef(false);
  const { openModal } = useModal()
  const route = useRouter()

  const [isCLickOurService, setIsCLickOurService] = useState(false);
  const [isCLickAboutUs, setIsCLickAboutUs] = useState(false);
  const [isCLickContact, setIsCLickContact] = useState(false);
  const [isCLickProFileRef, setIsCLickProFileRef] = useState(false);

  const [heightBgFrame, setHeightBgFrame] = useState(null)

  useEffect(() => {
    if (!ratioBeautiful) {
      window.addEventListener(('resize'), () => {
        const bgFrame = document.getElementsByClassName('bg-frame-banner')[0]
        if (bgFrame) {
          setTimeout(() => {
            setHeightBgFrame(bgFrame.clientHeight * 0.19)
          }, 100);
        }
      })
      const bgFrame = document.getElementsByClassName('bg-frame-banner')[0]
      if (bgFrame) {
        setTimeout(() => {
          setHeightBgFrame(bgFrame.clientHeight * 0.19)
        }, 100);
      }
    } else {
      setHeightBgFrame(null)
      window.removeEventListener('resize', () => {})
    }
    return () => window.removeEventListener('resize', () => {})
  }, [ratioBeautiful])

  const handleClick = (type) => {
    const timeDebone = 200;
    const timeDeboneLoading = 700;
    if (!isMouseClickRef.current) {
      isMouseClickRef.current = true;
      let title = 'our Service';
      switch (type) {
      case TYPE_BANNER.aboutUs:
        setIsCLickAboutUs(true);
        setTimeout(() => {
          setIsCLickAboutUs(false);
        }, timeDebone);
        title = 'About Us';
        ObserverService.emit(OBSERVER_KEY.loadingPageAboutUs)

        break;
      case TYPE_BANNER.contact:
        setIsCLickContact(true);
        setTimeout(() => {
          setIsCLickContact(false);
        }, timeDebone);
        title = 'contact';
        ObserverService.emit(OBSERVER_KEY.loadingPageContact)
        route.push('/page2')

        break;
      case TYPE_BANNER.profile:
        setIsCLickProFileRef(true);
        setTimeout(() => {
          setIsCLickProFileRef(false);
        }, timeDebone);
        title = 'Our ProtFolto';
        ObserverService.emit(OBSERVER_KEY.loadingPageProfile)

        break;
      default:
        setIsCLickOurService(true);
        setTimeout(() => {
          setIsCLickOurService(false);
        }, timeDebone);
        title = 'our Service';
        ObserverService.emit(OBSERVER_KEY.loadingPageOurServer)
        route.push('/home-demo')

        break;
      }
      // setTimeout(() => {
      //   isMouseClickRef.current = false;
      // }, timeDebone);
      // openModal({
      //   body: <div>{title}</div>
      // });
    }
  };

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
          key={`${stateClick}`}
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
      $height={!ratioBeautiful ? heightBgFrame : null}
      onLoad={() => {
        callBackLoad()
        ObserverService.emit(OBSERVER_KEY.loadContentFrame)
      }}
      // onClick={() => handleClick(TYPE_BANNER.ourService)}
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

        {
          renderImage(
            'image0_1265_3',
            isCLickOurService,
            images.home.btnOurService,
            images.home.btnOurServiceClick
          )
        }
        {
          renderImage(
            'image1_1265_3',
            isCLickProFileRef,
            images.home.btnPortFlto,
            images.home.btnPortFltoClick
          )
        }

        {
          renderImage(
            'image2_1265_3',
            isCLickAboutUs,
            images.home.btnAboutUs,
            images.home.btnAboutUsClick
          )
        }

        {
          renderImage(
            'image3_1265_3',
            isCLickContact,
            images.home.btnContact,
            images.home.btnContactClick
          )
        }

        {/* <image
          href={images.home.btnOurService}
          id="image0_1265_3"
          height="1097"
        /> */}
        {/*
              <image id="image2_1265_3" width="2560" height="1097" />
              <image id="image3_1265_3" width="2560" height="1097" /> */}
      </defs>
    </SVGCustom>
  )
}

export default FrameBtn
