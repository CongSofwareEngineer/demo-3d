import { useEffect, useRef } from "react";

import images from "@/utils/images";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
import { useScroll } from 'react-use-gesture';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Affix } from "antd";

function ParallaxBox() {
  const ref = useRef();

  const [{ scale }, set] = useSpring(() => ({ scale: 1 }));

  const bind = useScroll(({ xy: [, y] }) => {
    let newScale = 1 + y / 1000;
    if (newScale < 1) newScale = 1; // limit the minimum scale
    if (newScale > 2) newScale = 2; // limit the maximum scale
    set({ scale: newScale });
  });

  // ...
  return (
    <div {...bind()} style={{ height: "200vh", overflow: "hidden" }}>

<ParallaxProvider>
      <div
        style={{
          backgroundImage: `url(${images.background})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <Affix offsetTop={0}>
          <Parallax  translateX={['0px', '0px']}
  scale={[1.5, 1]}
  // rotate={[-180, 0]}
  easing="easeInQuad" 
  // tagOuter="figure"
  speed={0.5}
  >
          <img
            src={images.inSpace}
            style={{
              // backgroundImage: `url(${images.inSpace})`,
              width: "100%",
              height: "100vh",
          backgroundSize: "cover",

            }}
            alt=""
          />
        </Parallax>
          <Parallax  translateX={['0px', '0px']}
  scale={[1.5, 1]}
  // rotate={[-180, 0]}
  easing="easeInQuad" 
  // tagOuter="figure"
  speed={0.5}
  >
          <img
            src={images.inSpace}
            style={{
              // backgroundImage: `url(${images.inSpace})`,
              width: "100%",
              height: "100vh",
          backgroundSize: "cover",

            }}
            alt=""
          />
        </Parallax>

          </Affix>
  
 

         
 
        {/* <img src={images.inSpace} style={{width: "100%",
          height: "100vh",
      backgroundSize: "cover",}}/> */}


        </div>
      
   
      </div>
      
    
    </ParallaxProvider>
    </div>
 
  );
}

export default ParallaxBox;
