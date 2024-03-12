import { images } from '@/config/images';
import useSizeScreen from '@/hooks/useSizeScreen';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const ImgDesBanner = styled(Image)`
  position: absolute !important;
  inset: 0 !important;
  object-fit: cover !important;
  height: 100vh !important;
  width: auto !important;
  transform: rotate(90dge);
  ${
  props => props.isScale && css`
     width: 100vw !important;
    height: auto !important;
    `
}
`;

const DesBanner = () => {
  const { ratioBeautiful } = useSizeScreen();

  return (
    <ImgDesBanner isScale={!ratioBeautiful} fill src={images.home.bgFrameBase} />
  )
}

export default DesBanner
