import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import SelectSort from '../SelectSort'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import { MENU_SORTER } from '@/config/app'

const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}

const Content = ({ refContent = useRef(null), className = '', isViewportContent }) => {
  const [hoverItem, setHoverItem] = useState(-1)
  const [itemSelected, setItemSelected] = useState(MENU_SORTER.animation)
  const [openSorted, setOpenSorted] = useState(false)
  const [isHoverAllRegister, setIsHoverAllRegister] = useState(false)

  const onClickSorted = () => {
    setOpenSorted(!openSorted)
  }

  const handleClickGo = () => {
    alert('handleClickGo')
  }

  const handleClickAllRegister = () => {
    alert('handleClickAllRegister')
  }

  return (
    <div ref={refContent} className={`${className} container-content-base ${isViewportContent ? '' : 'content-un-in-viewport'}  `}>
      <MyImage
        url={images.home.bgContentBannerHome}
        width='100%'
        height='auto'
      />
      <div className='absolute-center w-[90%] md:max-w-[1300px]   h-[90%] flex flex-col justify-between items-center  '>
        <div className='mt-[8%] flex-1 ' >
          <SelectSort
            openSorted={openSorted}
            onClickSorted={onClickSorted}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            handleClickGo={handleClickGo}
          />
        </div>
        <div className='mt-[10%]  mb-5 flex-1 ' >
          <div className='h-[100px]'>
            <MyImage
              height='100%'
              width='auto'
              url={images.profile.btnAllRegister}
              className={`${isHoverAllRegister ? 'scale-105' : ''}`}
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
                  className={`cursor-pointer ${hoverItem === index && 'scale-[1.01] duration-300'}  relative w-full flex pb-[100%] bg-blue-400 rounded-2xl`}
                />
              )
            })
          }
        </div>
      </div>
      <div className='absolute-center z-[10] w-[90%] md:max-w-[1300px]  opacity-0 h-[90%] flex flex-col justify-between items-center  '>
        <div className='mt-[8%] flex-1 '>
          <SelectSort
            handleClickGo={handleClickGo}
            openSorted={openSorted}
            onClickSorted={onClickSorted}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        </div>
        <div className='mt-[10%] mb-5 flex-1 m-auto' >
          <div className='h-[100px]' onClick={handleClickAllRegister}>
            <MyImage
              className='cursor-pointer '
              height='100%'
              width='auto'
              url={images.profile.btnAllRegister}
              onMouseOver={() => setIsHoverAllRegister(true)}
              onMouseLeave={() => setIsHoverAllRegister(false)}

            />
          </div>

        </div>

        <div className='w-full flex-1 grid grid-cols-3 gap-8'>
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
