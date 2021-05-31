import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const Container = styled.h2`
  margin-top: 3rem;
  margin-right: 3rem;
`;

const Content = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${palette.gray4};
`;

function ConferenceCode() {
  return (
    <Container>
      <Content>회의 코드 : </Content>
      <Content>ABC2f1d5k7G</Content>
    </Container>
  );
}

export default ConferenceCode;
