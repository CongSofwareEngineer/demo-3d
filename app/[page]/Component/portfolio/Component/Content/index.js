import React, { useEffect, useState } from 'react'
import SelectSort from '../SelectSort'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import { MENU_SORTER } from '@/config/app'
import { useScroll } from 'react-use'
import useBgFrame from '@/hooks/useBgFrame'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const classNameListSorted = 'w-[90%] max-w-[1550px] md:max-w-[1300px]  h-[90%]  pt-[20%] flex flex-col justify-between items-center'
const classItemSorted = 'cursor-pointer hover:scale-[1.01]  duration-300 shadow-lg hover:shadow-white relative w-full flex pb-[100%] bg-blue-400 rounded-2xl'
const Content = () => {
  const [itemSelected, setItemSelected] = useState(MENU_SORTER.animation)
  const [isScrollBottomMax, setIScrollBottomMax] = useState(false)

  const { ref, inView: inViewContent } = useInView({ threshold: 0.15 })
  const { bgFrame } = useBgFrame()

  useEffect(() => {
    const scroll = document.getElementsByClassName('container-portfolio')[0]

    scroll && scroll.addEventListener('scroll', () => {
      const isAtBottom = scroll.scrollTop + scroll.clientHeight + 50 >= scroll.scrollHeight
      if (isAtBottom) {
        setIScrollBottomMax(true)
      } else {
        setIScrollBottomMax(false)
      }
    })
  }, [])

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

  return (
    // <div ref={refContent} className={`${className} container-content-base ${isViewportContent ? '' : 'content-un-in-viewport'}  `}>
    <div ref={ref} className=' snap-start  w-full '>
      <div className=' w-full content relative container-content-base flex justify-center items-center'>
        <MyImage
          url={images.home.bgContentBannerHome}
          width='auto'
          height='100%'
          position='absolute'
          className='pointer-events-none min-w-full min-h-full'
        />
        <div className={classNameListSorted} style={{ paddingBottom: bgFrame?.clientHeight ? bgFrame?.clientHeight * 0.2 : 20 }}>
          <div className=' flex-1 bg-red-700 w-full ' >
            <div className='w-[40%] min-w-[300px] m-auto'>
              <SelectSort
                itemSelected={itemSelected}
                setItemSelected={setItemSelected}
                handleClickGo={handleClickGo}
              />
            </div>
          </div>
          <div className='mt-[10%] w-full mb-5 flex-1 ' >
            {/* <div className=' w-1/4 mb-[50px] m-auto min-w-[100px]'> */}
            <div className=' w-1/4 mb-[50px] m-auto min-w-[100px]'>
              <MyImage
                height='auto'
                width='auto'
                url={images.profile.btnAllRegister}
                className='max-h-[120px] m-auto'
              />
            </div>
          </div>
          <div className='w-full flex-1 grid grid-cols-3 gap-8'>
            {
              arr.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={classItemSorted}
                  />
                )
              })
            }
          </div>
        </div>
        {
          !isScrollBottomMax && (
            <MyImage
              url={images.home.bgMaskContentBannerHome}
              width='auto'
              height='100%'
              position='absolute'
              className='pointer-events-none min-w-full min-h-full'
            />
          )
        }
      </div>
    </div>
  )
}

export default Content
