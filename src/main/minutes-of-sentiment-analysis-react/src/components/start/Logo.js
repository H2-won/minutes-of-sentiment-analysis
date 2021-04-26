import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Content = styled.div`
  font-size: 80px;
  color: ${palette.black};
`;

function Logo() {
  return <Content>감:회</Content>;
}

export default Logo;
