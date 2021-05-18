import React from 'react';
import styled from 'styled-components';

const Content = styled.h2`
  margin-top: 3rem;
  margin-left: 3rem;
  font-size: 20px;
  font-weight: bold;
`;

function Title() {
  return <Content>회의록</Content>;
}

export default Title;
