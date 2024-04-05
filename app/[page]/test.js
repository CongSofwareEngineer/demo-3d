'use client'
import React from 'react'
import LoadingRoutePage from '@/components/LoadingRoutePage'
import jsonProfile from '@/public/assets/json/transitions_1.mp4.lottie.json'
import { Spin } from 'antd'

const LoadingFirst = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' >
      <Spin />
    </div>
  )
}

export default LoadingFirst
