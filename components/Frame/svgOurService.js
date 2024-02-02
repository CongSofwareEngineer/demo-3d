import { images } from '@/config/images';
import useModal from '@/hooks/useModal';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: scale(0.955) translateX(1%);
  }

  to {
    transform: scale(1) translateX(0%); 
  }
`;
const RectCustom = styled.rect`
  /* animation: ${rotate} 2s linear infinite; */
`;
const ImageCustom = styled.image`
  -o-animation: ${rotate} 2s ease-in infinite alternate;
  -moz-animation: ${rotate} 2s ease-in infinite alternate;
  -webkit-animation: ${rotate} 2s ease-in infinite alternate;
  animation: ${rotate} 2s ease-in infinite alternate;
`;

const SvgOurService = () => {
  const { openModal } = useModal();

  const handleOpen = (text) => {
    console.log('====================================');
    console.log({ text });
    console.log('====================================');
    openModal({
      body: <div>{text}</div>
    });
  };
  return (
    <div className="absolute w-full bottom-0 z-10">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect y="179" width="1920" height="100%" fill="url(#pattern0)" />
        <g clipPath="url(#clip0_35_9)">
          <RectCustom
            onClick={() => handleOpen('our service')}
            className="hover"
            x="26"
            y="758"
            width="384"
            height="346"
            fill="url(#pattern1)"
          />
          <RectCustom
            className="hover"
            x="372"
            y="726"
            width="400"
            height="400"
            fill="url(#pattern2)"
          />
          <RectCustom
            className="hover"
            x="1494"
            y="758"
            width="400"
            height="400"
            fill="url(#pattern3)"
          />
          <RectCustom
            className="hover"
            x="760"
            y="704"
            width="400"
            height="400"
            fill="url(#pattern4)"
          />
          <RectCustom
            className="hover"
            x="1152"
            y="724"
            width="400"
            height="400"
            fill="url(#pattern5)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_35_9"
              transform="matrix(0.000520833 0 0 0.000925926 0.00108612 -0.333627)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_35_9"
              transform="matrix(0.00281576 0 0 0.003125 -0.063151 0)"
            />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image2_35_9" transform="scale(0.0025)" />
          </pattern>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image3_35_9" transform="scale(0.0025)" />
          </pattern>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image4_35_9" transform="scale(0.0025)" />
          </pattern>
          <pattern
            id="pattern5"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image5_35_9" transform="scale(0.0025)" />
          </pattern>
          <clipPath id="clip0_35_9">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
          <ImageCustom
            id="image1_35_9"
            width="400"
            height="320"
            href={images.ourServices1}
          />
          <ImageCustom
            id="image2_35_9"
            width="400"
            height="320"
            href={images.myPortfolio}
          />
          <ImageCustom
            id="image3_35_9"
            width="400"
            height="320"
            href={images.aboutUs}
          />
          <ImageCustom
            id="image4_35_9"
            width="400"
            height="320"
            href={images.email}
          />
          <ImageCustom
            id="image5_35_9"
            width="400"
            height="320"
            href={images.workFlow}
          />
          <image
            id="image0_35_9"
            width="1920"
            height="1440"
            href={images.frameBottom}
          />
        </defs>
      </svg>
      {/* <image id="image0_33_2" width="400" height="320" href={images.ourServices1} /> */}
    </div>
  );
};

export default SvgOurService;
