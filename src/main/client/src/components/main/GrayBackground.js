import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 50%;
  width: 100%;
  background: ${palette.gray1};
  z-index: -1;
`;

function GrayBackground() {
  return <Background />;
}

export default GrayBackground;
