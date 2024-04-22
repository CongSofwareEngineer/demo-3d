import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import './styles.scss'
import SelectSort from '../SelectSort'
import { MENU_SORTER } from '@/config/app'

const arr = []
const classItemSorted = 'cursor-pointer hover:scale-[1.01]  duration-300 shadow-lg hover:shadow-white relative w-full flex pb-[100%] bg-blue-400 rounded-2xl'

for (let index = 0; index < 9; index++) {
  arr.push('')
}
export const Content2 = () => {
  const [itemSelected, setItemSelected] = useState(MENU_SORTER.animation)
  const [isScrollBottomMax, setIScrollBottomMax] = useState(false)

  const { ref, inView: inViewContent } = useInView({ threshold: 0.15 })

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
    console.log({ content, inViewContent })
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
    <div ref={ref} className=' snap-start w-full relative '>
      <div className=' w-full content relative container-content-base  '>
        <div className='w-full'>
          <MyImage
            url={images.home.bgContentBannerHome}
            width='100%'
            height='auto '
            position='relative'
            maxWidth={'unset'}
            className='pointer-events-none min-w-full min-h-full'
          />
        </div>
        <div className='absolute inset-0 flex flex-col justify-between align-middle w-full h-full pt-[8%] pb-[5%]'>
          <div className='w-[40%] min-w-[300px]  m-auto '>
            <SelectSort
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
              handleClickGo={handleClickGo}
            />
          </div>
          <div className=' w-[20%]  m-auto min-w-[100px] mb-[5%]'>
            <MyImage
              height='auto'
              width='auto'
              url={images.profile.btnAllRegister}

              className='  m-auto'
            />
          </div>

          <div>
            <div className='w-[65%] m-auto flex-1 grid grid-cols-3 gap-[3%]'>
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
