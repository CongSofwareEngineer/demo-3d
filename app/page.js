'use client'
import Image from 'next/image'
import Model3d from './components/Model3d'
import Fiber3D from './components/Fiber3D'
import ImageAni from './components/ImageAni'
import Parallax3D from './components/Parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useRedux, useUserData } from '@/Redux/store'
import { useEffect, useState, useLayoutEffect } from 'react'
import BigNumber from 'bignumber.js';
import { toast } from 'react-toastify';
import moment from 'moment/moment';

export default function Home () {
  const { userData, readyRedux } = useRedux(state => state)
  console.log({ userData });
  useEffect(() => {
    readyRedux()
    console.log({ laB: navigator.language.toLowerCase() });
  }, [])
  return (
    <>
      {/* <Fiber3D /> */}
      {/* <ParallaxProvider scrollAxis="horizontal" > */}
      <Parallax3D />

      {/* </ParallaxProvider> */}

      {/* <div  className="h-screen w-full relative indent-1">
        <ImageAni />
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={1}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={2}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={3}/>
      </div> */}
    </>

  )
}
