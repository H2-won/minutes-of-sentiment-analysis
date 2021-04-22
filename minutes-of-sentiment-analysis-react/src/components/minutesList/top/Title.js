import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const Content = styled.h2`
  color: ${palette.black};
  font-size: 32px;
  font-weight: bold;
  margin-left: 110px;
`;

function Title() {
  return <Content>회의록 리스트</Content>;
}

export default Title;
