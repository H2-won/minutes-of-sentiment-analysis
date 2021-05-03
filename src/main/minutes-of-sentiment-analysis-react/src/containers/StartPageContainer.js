import React from 'react';
import styled from 'styled-components';
import Description from '../components/start/Description';
import GoogleLoginBtn from '../components/start/GoogleLoginBtn';
import Logo from '../components/start/Logo';
import StartImage from '../components/start/StartImage';
import Wrapper from '../components/start/Wrapper';
import palette from '../lib/styles/palette';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: ${palette.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function StartPageContainer() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Description />
        <GoogleLoginBtn />
      </Wrapper>
      <StartImage />
    </Container>
  );
}

export default StartPageContainer;
