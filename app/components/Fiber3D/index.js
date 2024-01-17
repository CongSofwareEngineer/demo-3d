"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Environment, Float, Html, Image, OrbitControls, ScrollControls, Sphere, Text, Text3D, useScroll, useTexture } from "@react-three/drei";
import styled from 'styled-components';
import ImageAni from "../ImageAni";
import { images } from "@/config/images";
import { Vector3 } from "three";

 


 const CanvasCustom = styled(Canvas)`
    height: 100% !important;
    min-height: 100vh !important;
    >div{
        min-height: 100vh !important;
    }
  canvas{
    height: 100% !important;
  }
`;
function Box({position,indexItem=0}) {

    const meshRef = useRef();
    const meshRefItem = useRef();
    const hiScreenRef = useRef(0);
    const scroll=useScroll()
    console.log({scroll});

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY)

  const checkRatioScreen = (isPlus=true) => { 
    let hisScreen=window.innerHeight

    //chi 10 lần
    const temp=hisScreen/10

    //vị trí scroll
    const position=window.scrollY %hisScreen 

    if(indexItem==0){
        const scaleSpeed = 0.01; 
        const a=(position/temp)/10 
        
        if(window.scrollY ==0){
            meshRef.current.rotation.x =0
          // Adjust the speed as needed
            meshRef.current.scale.x =1
            meshRef.current.scale.y =1
            meshRef.current.scale.z =1

        }
        if(isPlus){
            console.log(' plus');

            // meshRef.current.rotation.x +=0.1
            meshRef.current.scale.x += scaleSpeed ;
            meshRef.current.scale.y += scaleSpeed ;
            meshRef.current.scale.z += scaleSpeed ;

        }else{
            console.log('no plus');
            // meshRef.current.rotation.x -=0.1
            if(meshRef.current.scale.x<=1){
                meshRef.current.scale.x =1
                meshRef.current.scale.y =1
                meshRef.current.scale.z =1
            }else{
                meshRef.current.scale.x -= scaleSpeed ;
                meshRef.current.scale.y -= scaleSpeed ;
                meshRef.current.scale.z -= scaleSpeed ;
            }
            
        }
    } 
    
   }
  
  useFrame((state, delta) =>{ 
    if(hiScreenRef.current >window.scrollY ){
        checkRatioScreen(false)
    }
    if(hiScreenRef.current < window.scrollY ){
        checkRatioScreen()
    }  
    hiScreenRef.current=window.scrollY 
    
  })
 
  useEffect(() => {
    const handleScroll = (event) => {
        // Adjust the zoom speed as needed
        const zoomSpeed = 0.1;
  
        // Update the camera position based on the scroll direction
        console.log({deltaY:event.deltaY });
      };
    document.addEventListener('wheel', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [])
  
  

  return (
    <mesh
    position={position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} scale={[1,1,1]}  />
      <meshStandardMaterial ref={meshRefItem} color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Fiber3D = () => { 
  const text3dRef=useRef(null)
  const texture=useTexture(images.comingSoon.bgComingSoon)

  useFrame(()=>{
    if(text3dRef.current){
      if(window?.innerWidth<500){
        text3dRef.current.scale.set(0.2,0.2,0.2)
        text3dRef.current.position.set(2,0,0)
      }else{
        if(window.innerWidth>2400){
          text3dRef.current.scale.set(0.95,0.95,0.95)
          text3dRef.current.position.set(0 ,0,0)

         }else{
          const ratio=2500-window.innerWidth
          const a=(8-ratio/250)
          const ax=ratio/250
          if(a<1){
            text3dRef.current.scale.set(0.3,0.3,0.3)
            text3dRef.current.position.set(2 ,0,0)

           }else{
            const b=0.1*a
            const bx=0.125*ax
            text3dRef.current.scale.set(0.2+b,0.2+b,0.2+b)
             text3dRef.current.position.set(0.5+bx,0,0)

           }
        }
      }

     
    }
   
  })

  
  return (
    // <div className="w-full min-h-screen h-screen fixed inset-0 ">
    < >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <ScrollControls pages={2} damping={0.25}> */}
        {/* <Box position={[-1.2, 0, 0]}  />
        <Box position={[1.2, 0, 0]}  indexItem={1}/> */}
        {/* </ScrollControls> */}
       
      <Image 
      
       opacity={0.8} 
       scale={[16,9]}
       transparent
        url={images.comingSoon.bgComingSoon} 
        
      />
        <mesh>
       
         <Float position={[0, 0, 2]}  floatIntensity={5} rotationIntensity={1} speed={3}>
         <Center  rotation={[-0.5, -0.25, 0]} >
         
         <Text3D 
         size={0.8}
         ref={text3dRef} 
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
           
         font={'/assets/fonts/basic.json'} >
           coming soon
           <meshNormalMaterial   />
         </Text3D>
 
         </Center>
         
         </Float>
        </mesh>

       

        {/* <OrbitControls 
        // autoRotate 
        rotation={false} 
        enableZoom={false}
        enablePan={false}
        
        />  */}
      </>
  );
};

const index = () => { 
  return (
    <div className="w-full min-h-screen h-screen   "> 
    <CanvasCustom className="h-full w-full  min-h-screen">
      <Fiber3D />
    </CanvasCustom>
  </div>
  )
 }
export default index;
