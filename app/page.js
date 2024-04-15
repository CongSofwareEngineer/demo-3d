'use client'
import Fiber3D from '@/components/Fiber3D'
import { useEffect, useState } from 'react'
export default function Home () {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (isClient && <Fiber3D />
  // <main className="flex min-h-screen flex-col items-center justify-between">
  //   <Fiber3D />

  //   {/* <div  className="h-screen w-full relative indent-1">
  //     <ImageAni />
  //   </div>
  //   <div  className="h-screen w-full relative indent-1">
  //   <ImageAni indexItem={1}/>
  //   </div>
  //   <div  className="h-screen w-full relative indent-1">
  //   <ImageAni indexItem={2}/>
  //   </div>
  //   <div  className="h-screen w-full relative indent-1">
  //   <ImageAni indexItem={3}/>
  //   </div> */}
  // </main>
  )
}
