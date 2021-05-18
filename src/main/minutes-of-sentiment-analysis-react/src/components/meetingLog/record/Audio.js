import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 20%;
`;

const Content = styled.audio`
  width: 100%;
  height: 30%;
`;

function Audio() {
  return (
    <Container>
      <Content>
        <source src="" />
        오디오 플레이어
      </Content>
    </Container>
  );
}

export default Audio;
