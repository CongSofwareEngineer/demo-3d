'use client'
import { ParallaxProvider as ParallaxClient } from 'react-scroll-parallax'

const ParallaxProvider = ({ children }) => {
  return (
    <ParallaxClient>{children}</ParallaxClient>
  )
}

export default ParallaxProvider
