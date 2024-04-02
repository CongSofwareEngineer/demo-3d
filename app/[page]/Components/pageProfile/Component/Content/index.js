import React, { useState } from 'react'
import SelectSort from '../SelectSort'
import MyImage from '@/components/MyImage'
import bgContentBannerHome from '@/public/assets/images/Home/bgContentBannerHome.png'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const Content = ({ refContent }) => {
  const [hoverItem, setHoverItem] = useState(-1)

  return (
    <div ref={refContent} className='w-full flex flex-col relative justify-center items-center overflow-x-hidden'>
      <MyImage
        url={bgContentBannerHome}
        width='100%'
        height='auto'
      />
      <div className='absolute-center w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
        <div className='mt-[10%] flex-1' />
        <div className='w-full flex-1 grid grid-cols-3 gap-5'>
          {
            // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            arr.map((e, index) => {
              return (
                <div
                  style={{
                    boxShadow: hoverItem === index ? 'red 0px 5px 15px' : 'none'
                    // mask: index > 5 ? 'linear-gradient(0deg, transparent, white 40%, white 80%, white 80%)' : 'none'
                  }}
                  key={index}
                  className={`cursor-pointer ${hoverItem === index && 'scale-[1.01] duration-300'}  relative w-full flex pb-[100%] bg-blue-400 rounded-2xl`}
                />
              )
            })
          }
        </div>
      </div>
      <div className='absolute-center z-20 w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
        <div className='mt-[10%] flex-1'>
          <SelectSort />
        </div>
        <div className='w-full flex-1 grid grid-cols-3 gap-5'>
          {
            arr.map((e, index) => {
              return (
                <div
                  onMouseOver={() => setHoverItem(index)}
                  onMouseLeave={() => setHoverItem(-1)}
                  key={index}
                  className=' cursor-pointer    relative w-full flex pb-[100%]   rounded-2xl'
                />
              )
            })
          }
        </div>
      </div>
      {/* {
      !isScrollBottomMax && (
        <MyImage
          url={images.home.bgMaskContentBannerHome}
          width='100%'
          height='auto'
          position='absolute'
          className='z-10'
        />
      )
    } */}

    </div>
  )
}

export default Content
