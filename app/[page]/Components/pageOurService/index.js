import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import MyImage from '@/components/MyImage';
import VideoBanner from '@/components/VideoBanner';
import { images, videos } from '@/config/images';
import React from 'react';
import bgContentBannerHome from '@/public/assets/images/Home/bgContentBannerHome.png'
const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}
const PageOurService = ({
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      <div className="w-full h-full relative overflow-hidden ">
        <VideoBanner url={videos.planet1} poster={images.home.bannerPreload} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickProfile={clickProfile}
          clickAboutUs={clickAboutUs}
        />
      </div>
      <div className='w-full flex flex-col relative justify-center items-center '>
        <MyImage
          url={bgContentBannerHome}
          width='100%'
          height='auto'
        />
        <div className='absolute-center w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
          <div className='mt-[10%] flex-1'>
            Input
          </div>
          <div className='w-full flex-1 grid grid-cols-3 gap-5'>
            {
              arr.map((e, index) => {
                return (
                  <div
                    style={{
                      mask: index > 5 ? 'linear-gradient(0deg, transparent, white 40%, white 80%, white 80%)' : 'none'
                    }}
                    key={index}
                    className='cursor-pointer hover:scale-[1.01]   relative w-full flex pb-[100%] bg-blue-400 rounded-2xl'
                  >
                    {/* <div className='cursor-pointer z-20 absolute w-[90%] h-[90%] inset-0 bg-yellow-200'>

                    </div> */}
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* <MyImage
          url={images.home.bgMaskContentBannerHome}
          width='100%'
          height='auto'
          position='absolute'
          className='z-10'
        /> */}
      </div>
    </div>
  );
};

export default PageOurService;
