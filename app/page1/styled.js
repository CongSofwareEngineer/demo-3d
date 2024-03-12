import Image from 'next/image';
import styled from 'styled-components';

export const DesBanner = styled(Image)`
  position: absolute !important;
  inset: 0 !important;
  object-fit: cover !important;
  height: 100vh !important;
  width: auto !important;
  transform: rotate(90dge);
`;
export default () => {};
