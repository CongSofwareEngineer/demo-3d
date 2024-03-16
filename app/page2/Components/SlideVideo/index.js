import { TYPE_OPTION_BANNER_2 } from '@/config/app';
import { images } from '@/config/images';
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

const SlideVideo = ({
  hoverGameArt,
  setHoverGameArt,
  noShowElement = false,
  hoverCharacter,
  setHoverCharacter,
  hoverBranding,
  setHoverBranding,
  keySVG = 'slide'
}) => {
  console.log({ hoverBranding, hoverGameArt });
  const handleHover = (key) => {
    switch (key) {
    case TYPE_OPTION_BANNER_2.gameArt:
      !isMobile && setHoverGameArt(true);
      break;
    case TYPE_OPTION_BANNER_2.character:
      !isMobile && setHoverCharacter(true);
      break;
    default:
      !isMobile && setHoverBranding(true)
      break;
    }
  };

  const handleUnHover = (key) => {
    switch (key) {
    case TYPE_OPTION_BANNER_2.gameArt:
      !isMobile && setHoverGameArt(false);
      break;
    case TYPE_OPTION_BANNER_2.character:
      !isMobile && setHoverCharacter(false);
      break;
    default:
      !isMobile && setHoverBranding(false)
      break;
    }
  };

  const renderImgSvg = (id, url, urHover, isHover) => {
    // const getId = (isClick) => {
    //     if(isClick)
    //  }
    return (
      <>
        <image href={url} id={isHover ? 'no-data' : id} height="100" />
        <image href={urHover} id={!isHover ? 'no-data' : id} height="100" />
      </>
    );
  };

  const renderElement = () => {
    return (
      <SVGCustom
        viewBox="0 0 2560 1097"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        absolute={noShowElement}
        key={keySVG}
        className={keySVG}
        id={keySVG}
      >
        {/* <rect width="2560" height="1097" fill="url(#pattern0)"/>
        <rect width="2560" height="1097" fill="url(#pattern1)"/> */}

        {/* img character */}
        <rect
          className=" cursor-pointer"
          x={1035}
          y={340}
          width="420"
          height="170"
          fill={`url(#pattern1${keySVG})`}
        />

        {/* img branding */}
        <rect
          className=" cursor-pointer"
          x={360}
          y={320}
          width="420"
          height="170"
          fill={`url(#pattern0${keySVG})`}
        />

        {/* img game art */}
        <rect
          className=" cursor-pointer"
          x={1770}
          y={420}
          width="420"
          height="170"
          fill={`url(#pattern2${keySVG})`}
        />

        {/* table game art */}
        <rect x="1335" y="456" width="583" height="460" fill={`url(#pattern5${keySVG})`} />
        {/* table branding */}
        <rect x="1163" y="499" width="655" height="400" fill={`url(#pattern3${keySVG})`}/>
        {/* table branding */}
        <rect x="618" y="380" width="545" height="325" fill={`url(#pattern4${keySVG})`}/>

        <defs>
          <pattern
            id={`pattern0${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1" height="1"
          >
            <use xlinkHref={`#image0_1220_6${keySVG}`}
              transform="scale(0.0037 0.009)"
            />
          </pattern>
          <pattern id={`pattern1${keySVG}`} patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref={`#image1_1220_6${keySVG}`}
              transform="scale(0.0037 0.009)"
            />
          </pattern>
          <pattern
            id={`pattern2${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref={`#image2_1220_6${keySVG}`} transform="scale(0.0037 0.009)" />
          </pattern>
          <pattern
            id={`pattern3${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image3_1220_6${keySVG}`}
              transform="matrix(0.001 0 0 0.00126739 0 -0.12419)"
            />
          </pattern>
          <pattern
            id={`pattern4${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image4_1220_6${keySVG}`}
              transform="matrix(0.001 0 0 0.00167692 0 -0.0600923)"
            />
          </pattern>
          <pattern
            id={`pattern5${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image5_1220_6${keySVG}`}
              transform="matrix(0.001 0 0 0.00126739 0 -0.12419)"
            />
          </pattern>
          {/* <image id="image1_1220_6" width="2560" height="1097" /> */}

          {renderImgSvg(
            `image0_1220_6${keySVG}`,
            images.home.banner2.branding,
            images.home.banner2.branding,
            hoverBranding
          )}
          {renderImgSvg(
            `image1_1220_6${keySVG}`,
            images.home.banner2.character,
            images.home.banner2.character,
            hoverCharacter
          )}
          {renderImgSvg(
            `image2_1220_6${keySVG}`,
            images.home.banner2.gameArt,
            images.home.banner2.gameArtClick,
            hoverGameArt
          )}
          {/*
          {renderImgSvg(
            `image1_1220_6${keySVG}`,
            images.home.banner2.gameArt,
            images.home.banner2.gameArtClick,
            hoverGameArt
          )} */}
          {
            hoverBranding && (
              <image
                href={images.home.banner2.tableBranding}
                id={`image4_1220_6${keySVG}`}
                width="750"
                height="800"
              />
            )
          }
          {
            hoverCharacter && (
              <image
                href={images.home.banner2.tableCharacter}
                id={`image3_1220_6${keySVG}`}
                width="1000" height="718"
              />
            )
          }

          {
            hoverGameArt && (
              <image
                href={images.home.banner2.tableGameArt}
                id={`image5_1220_6${keySVG}`}
                width="800"
                height="800"
              />
            )
          }

        </defs>
      </SVGCustom>
    );
  };

  const renderNoElement = () => {
    return (
      <SVGCustom2
        viewBox="0 0 2560 1097"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        absolute={noShowElement}
        key={keySVG}
        className={keySVG}
        id={keySVG}
      >
        {/* <rect width="2560" height="1097" fill="url(#pattern0)"/>
        <rect width="2560" height="1097" fill="url(#pattern1)"/> */}

        {/* table branding */}
        <rect
          onMouseEnter={() => handleHover(TYPE_OPTION_BANNER_2.branding)}
          onMouseLeave={() => handleUnHover(TYPE_OPTION_BANNER_2.branding)}
          onClick={() => setHoverBranding(!hoverBranding)}
          className=" cursor-pointer"
          x={360}
          y={320}
          width="420"
          height="170"
          fill={`url(#pattern0${keySVG})`}
        />

        {/* table branding */}
        <rect
          onMouseEnter={() => handleHover(TYPE_OPTION_BANNER_2.character)}
          onMouseLeave={() => handleUnHover(TYPE_OPTION_BANNER_2.character)}
          onClick={() => setHoverCharacter(!hoverCharacter)}
          className=" cursor-pointer"
          x={1035}
          y={340}
          width="420"
          height="170"
          fill={`url(#pattern1${keySVG})`}
        />

        {/* table game art */}
        <rect
          onMouseEnter={() => handleHover(TYPE_OPTION_BANNER_2.gameArt)}
          onMouseLeave={() => handleUnHover(TYPE_OPTION_BANNER_2.gameArt)}
          onClick={() => setHoverGameArt(!hoverGameArt)}
          className=" cursor-pointer"
          x={1770}
          y={420}
          width="420"
          height="170"
          fill={`url(#pattern2${keySVG})`}
        />

        <defs>
          {/* img branding */}
          <pattern
            id={`pattern0${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          />

          {/* img character */}
          <pattern
            id={`pattern1${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          />
          {/* img game art */}
          <pattern
            id={`pattern2${keySVG}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          />

        </defs>
      </SVGCustom2>
    );
  };

  return noShowElement ? renderNoElement() : renderElement();
};
const SVGBase = styled.svg`
  height: auto;
  width: auto;
  min-height: 100vh;
  min-width: 100vw;
  width: auto;
  /* left: 50%; */
  /* right: 50%; */
   position: absolute;
  margin-left: 50%;
  transform: translate(-50%, 0%);
`;

const SVGCustom = styled(SVGBase)``

const SVGCustom2 = styled(SVGBase)``

export default SlideVideo;
