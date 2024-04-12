import Image from 'next/image'
import styled from 'styled-components'

export const ImageBanner = styled(Image)`
  min-height: 100vh !important;
  position: relative !important;
  width: auto !important;
  height: auto !important;
  inset: unset !important;
  bottom: 0 !important;
  max-width: none !important;
  max-width: none !important;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10;
`
