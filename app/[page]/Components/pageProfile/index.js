import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import MyImage from '@/components/MyImage';
import VideoBanner from '@/components/VideoBanner';
import { TYPE_SCROLL_PAGE } from '@/config/app';
import { images, videos } from '@/config/images';
import { scrollTop } from '@/utils/function';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Content from './Component/Content';
const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}
const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  const refContent = useRef(null)
  const scrollDirection = useRef(TYPE_SCROLL_PAGE.toBottom)

  useLayoutEffect(() => {
    scrollTop()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (scrollDirection.current === TYPE_SCROLL_PAGE.toBottom) {
        if (scrollPosition > 0 && scrollPosition < viewportHeight) {
          if (typeof refContent.current?.scrollIntoView === 'function') {
            refContent.current.scrollIntoView({
              behavior: 'instant',
              block: 'start'
            })
            scrollDirection.current = TYPE_SCROLL_PAGE.toTop
          }
        }
      } else {
        if (scrollPosition > 0 && scrollPosition < viewportHeight) {
          if (window) {
            window.scrollTo({ top: 0, behavior: 'instant' })
            scrollDirection.current = TYPE_SCROLL_PAGE.toBottom
          }
        }
      }
    })

    return () => {
      scrollTop()
    }
  }, [])

  return (
    <div className='w-full overflow-x-hidden'>
      <div className="relative w-full h-screen overflow-x-hidden ">
        <div className="w-full h-full relative overflow-hidden ">
          <VideoBanner url={videos.bannerProfile} />
          <BgFrameBanner />
          <FrameBtn
            clickContactAs={clickContactAs}
            clickOurService={clickOurService}
            clickAboutUs={clickAboutUs}
          />
        </div>
      </div>
      <Content refContent={refContent} />
    </div>

  );
};

export default PageProfile;
