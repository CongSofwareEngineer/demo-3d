import { images } from '@/config/images'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useWindowSize } from 'react-use'
import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import { isMobile } from 'react-device-detect'
import { usePathname } from 'next/navigation'
import useBgFrame from '@/hooks/useBgFrame'

const ImageCustom = styled(Image)`
   filter:  ${(props) => props.$noPageSelected ? 'brightness(1)' : 'brightness(0.75)'};
  ${(props) =>
    props.$isClick
      ? css`
          position: relative !important;
          max-height: 100% !important;
          height: 90% !important;
          width: auto !important;
          max-width: none !important;
        `
      : css`
          position: relative !important;
          height: 0px !important;
          width: 0px !important;
          opacity: 0 !important;
        `}
`

const ContainerImgBtn = styled.div`
  user-select: none;
  position: relative;
  left: ${(props) => props.$left}%;
  height: ${(props) => props.$height}%;
  cursor: pointer;
`

const ImageBtn = ({
  src,
  srcClick,
  typeClick = OBSERVER_KEY.aboutUs,
  height = '',
  top = '',
  left = '',
  isEx = false
}) => {
  const patchName = usePathname()

  const [isClick, setIsClick] = useState(false)

  const handleClick = () => {
    setIsClick(true)
    setTimeout(() => {
      setIsClick(false)
    }, 200)
    ObserverService.emit(typeClick)
  }

  return (
    <ContainerImgBtn
      $left={isEx ? left * 0.99 : left}
      $height={height}
      onMouseDown={handleClick}
      onClick={() => (isMobile ? handleClick() : {})}
      style={{ top: isClick ? `${top - 1}%` : `${top}%` }}
    >
      <ImageCustom
        loading="lazy"
        draggable={false}
        $noPageSelected={patchName.slice(1) === typeClick}
        src={src}
        fill
        $isClick={!isClick}
        className={'hover:brightness-100'}
        alt={`${src}-noClick`}
      />

      <ImageCustom
        loading="lazy"
        draggable={false}
        $noPageSelected={patchName.slice(1) === typeClick}
        src={srcClick}
        fill
        $isClick={isClick}
        className={'hover:brightness-100'}
        alt={`${src}-isClick`}

      />
    </ContainerImgBtn>
  )
}

const FrameBtnByImage = () => {
  const [widthBgFrame, setWidthBgFrame] = useState(10000)
  const [heightBgFrame, setHeightBgFrame] = useState(10000)
  const [isShow, setIsShow] = useState(false)

  const { width, height } = useWindowSize()
  const { bgFrame } = useBgFrame()

  useEffect(() => {
    if (bgFrame) {
      setIsShow(true)
      setWidthBgFrame(bgFrame.clientWidth)
      setHeightBgFrame(bgFrame.clientHeight)
    }
  }, [width, height, bgFrame])

  return (
    isShow
      ? (
        <div
          className={'fixed z-[21]  bottom-0  flex items-center select-none '}
          style={{ width: widthBgFrame, height: heightBgFrame * 0.21 }}
        >
          <ImageBtn
            src={images.home.btnOurService}
            srcClick={images.home.btnOurServiceClick}
            height={70}
            left={15}
            top={25}
            typeClick={OBSERVER_KEY.ourService}
          />

          <ImageBtn
            src={images.home.btnPortFlto}
            srcClick={images.home.btnPortFltoClick}
            height={66}
            left={14}
            top={15}
            typeClick={OBSERVER_KEY.portfolio}
          />

          <ImageBtn
            src={images.home.btnTree}
            srcClick={images.home.btnTreeClick}
            height={72}
            left={19}
            top={-1}
            typeClick={OBSERVER_KEY.home}
            isEx
          />

          <ImageBtn
            src={images.home.btnAboutUs}
            srcClick={images.home.btnAboutUsClick}
            height={66}
            left={23.5}
            top={15}
            typeClick={OBSERVER_KEY.aboutUs}
          />

          <ImageBtn
            src={images.home.btnContact}
            srcClick={images.home.btnContactClick}
            height={69}
            left={23}
            top={26}
            typeClick={OBSERVER_KEY.contactAt}
          />
        </div>
      )
      : <></>
  )
}
export default FrameBtnByImage
