import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Container = styled.div`
  background: ${palette.white};
  z-index: 21;
  min-width: 500px;
  min-height: 240px;
`;

function Modal({ Title, Content, OkBtn, CancleBtn }) {
  return (
    <Background>
      <Container>
        <Title />
        <Content />
        <div>
          <OkBtn />
          <CancleBtn />
        </div>
        <CloseBtn />
      </Container>
    </Background>
  );
}

export default Modal;
