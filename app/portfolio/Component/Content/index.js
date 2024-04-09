import React, { useEffect, useState } from 'react'
import SelectSort from '../SelectSort'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import { MENU_SORTER } from '@/config/app'
import useSizeScreen from '@/hooks/useSizeScreen'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const Content = () => {
  const [hoverItem, setHoverItem] = useState(-1)
  const [itemSelected, setItemSelected] = useState(MENU_SORTER.animation)

  const { ref, inView: inViewContent } = useInView({ threshold: 0.15 })
  const { height } = useSizeScreen()

  useEffect(() => {
    const content = document.getElementsByClassName('content')[0]
    if (content) {
      if (inViewContent) {
        content.classList.add('in-viewport-content')
      } else {
        content.classList.remove('in-viewport-content')
      }
    }
  }, [inViewContent])

  const handleClickGo = () => {
    alert('handleClickGo')
  }

  const handleClickAllRegister = () => {
    alert('handleClickAllRegister')
  }

  return (
    // <div ref={refContent} className={`${className} container-content-base ${isViewportContent ? '' : 'content-un-in-viewport'}  `}>
    <div ref={ref} className=' snap-start  w-full '>
      <div className=' w-full content relative container-content-base flex justify-center items-center'>
        <MyImage
          url={images.home.bgContentBannerHome}
          width='auto'
          height='100%'
          position='absolute'
          className='pointer-events-none'
        />
        <div className={'w-[90%] max-w-[1550px] md:max-w-[1300px]  h-[90%]  pt-[20%] pb-[10%] flex flex-col justify-between items-center  '}>
          <div className=' flex-1 ' >
            <SelectSort
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
              handleClickGo={handleClickGo}
            />
          </div>
          <div className='mt-[10%]  mb-5 flex-1 ' >
            <div className='min-h-[120px] w-[50%] mb-[50px] m-auto'>
              <MyImage
                height='100%'
                width='auto'
                url={images.profile.btnAllRegister}
                className={'hover:scale-105 duration-300 cursor-pointer'}
              />
            </div>
          </div>
          <div className='w-full flex-1 grid grid-cols-3 gap-8'>
            {
              arr.map((e, index) => {
                return (
                  <div
                    style={{
                      boxShadow: hoverItem === index ? 'red 0px 5px 15px' : 'none'
                    // mask: index > 5 ? 'linear-gradient(0deg, transparent, white 40%, white 80%, white 80%)' : 'none'
                    }}
                    key={index}
                    className={'cursor-pointer hover:scale-[1.01]  duration-300 shadow-lg shadow-red-500 relative w-full flex pb-[100%] bg-blue-400 rounded-2xl'}
                  />
                )
              })
            }
          </div>
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
