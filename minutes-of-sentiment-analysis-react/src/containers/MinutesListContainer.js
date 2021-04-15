import React from 'react';
import styled from 'styled-components';
import LookupByCodeBtn from '../components/minutesList/LookupByCodeBtn';
import MinutesListWrapper from '../components/minutesList/MinutesListWrapper';
import Title from '../components/minutesList/Title';
import TopWrapper from '../components/minutesList/TopWrapper';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function MinutesListContainer() {
  return (
    <Container>
      <TopWrapper>
        <Title />
        <LookupByCodeBtn />
      </TopWrapper>
      <MinutesListWrapper></MinutesListWrapper>
    </Container>
  );
}

export default MinutesListContainer;
