import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 770px;
  height: 550px;
  margin-left: 40px;
`;

function StartImage() {
  return <Image src="/images/startImg.jpg" />;
}

export default StartImage;
