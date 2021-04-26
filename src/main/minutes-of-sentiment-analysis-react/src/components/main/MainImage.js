import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 750px;
  height: 400px;
  position: absolute;
  bottom: -55px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

function MainImage() {
  return <Image src="/images/mainImg.jpg" />;
}

export default MainImage;
