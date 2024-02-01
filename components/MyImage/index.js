import Image from 'next/image'
import styled from 'styled-components'
import styles from './myImage.module.scss'
const ImgCustom = styled(Image)`
  position: relative !important;
  height: ${props => props.heightImg} !important;
  width: ${props => props.widthImg} !important;
`

const MyImage = ({
  url,
  width = '100%',
  height = 'auto',
  alt,
  className = '',
  loading = 'lazy',
  quality = 80,
  onClick = () => {},
  onLoad = () => {},
  ...props
}) => {
  return (
    <ImgCustom
      alt={alt || url}
      src={url}
      fill
      widthImg={width}
      heightImg={height}
      className={`${styles['my-image-base']} ${className}`}
      quality={quality}
      onLoad={onLoad}
      {...props}
    />
  )
}

export default MyImage
