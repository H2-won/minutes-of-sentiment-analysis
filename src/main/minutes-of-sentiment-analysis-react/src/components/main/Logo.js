import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Content = styled.h2`
  position: absolute;
  top: 17.5%;
  font-size: 60px;
  font-weight: bold;
  color: ${palette.orange1};
`;
function Logo() {
  return <Content>감:회</Content>;
}

export default Logo;
