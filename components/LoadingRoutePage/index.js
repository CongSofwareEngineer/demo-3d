import React from 'react'
import Lottie from 'react-lottie'
import json from '@/public/assets/json/transitions_1.mp4.lottie.json'
import styled, { css } from 'styled-components'
import useSizeScreen from '@/hooks/useSizeScreen'
const ContainerLottie = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 19;
  svg {
    margin-left: 50%;
    transform: translate(-50%, 0%) !important;
    ${(props) =>
    props.$ratioBeautiful
      ? css`
            height: 100vh !important;
            width: auto !important;
          `
      : css`
            height: auto !important;
            width: 100vw !important;
          `}
  }
`

const LottieCustom = styled(Lottie)``
const LoadingRoutePage = ({ src }) => {
  const { ratioBeautiful } = useSizeScreen()
  return (
    <ContainerLottie $ratioBeautiful={ratioBeautiful}>
      <LottieCustom
        options={{
          loop: true,
          autoplay: true,
          animationData: src || json
        }}
        width={'auto'}
        height={'100%'}
      />
    </ContainerLottie>
  )
}

export default LoadingRoutePage
