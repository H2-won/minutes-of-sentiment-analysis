import React from 'react';
import styled from 'styled-components';
import ButtonWrap from '../components/main/ButtonWrap';
import GrayBackground from '../components/main/GrayBackground';
import Logo from '../components/main/Logo';
import MainImage from '../components/main/MainImage';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

function MainPageContainer() {
  return (
    <Container>
      <Logo />
      <ButtonWrap />
      <MainImage />
      <GrayBackground />
    </Container>
  );
}

export default MainPageContainer;
