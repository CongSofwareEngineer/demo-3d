import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BN from 'bignumber.js'
import { images } from '@/config/images';

const ImgCustom = styled.img`
  
`;

const Line = styled.div`
    height: 10%;
    width: 100%;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,3,3,1) 50%, rgba(247,247,247,1) 100%);
  
`;

const BgVideo = styled.img`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
`;

const ImageEx = ({
  src,
  alt,
  isUp = false,
  isRight = false,
  hFull = false,
  className = ''
}) => {
  const [isOver219, setIsOver219] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const sizeScreen = new BN(w).dividedBy(h).toNumber()
      const sizeNormal = new BN(21).dividedBy(9).toNumber()
      //   console.log({ sizeScreen, sizeNormal });
      if (BN(sizeScreen).gt(sizeNormal)) {
        setIsOver219(true)
      } else {
        setIsOver219(false)
      }
    })

    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])
  console.log({ isOver219 });

  return (
    <div className='w-full h-full relative'>
      <BgVideo src={images.bgVideo} fill quality={80} />

      <Line />
    </div>
  )
}

export default ImageEx
