import React from 'react';
import styled from 'styled-components';
import GrayBackground from '../components/minutesList/GrayBackground';
import LookupByCodeBtn from '../components/minutesList/top/LookupByCodeBtn';
import MinutesListWrapper from '../components/minutesList/meetingLog/MinutesListLayout';
import Title from '../components/minutesList/top/Title';
import TopWrapper from '../components/minutesList/top/TopWrapper';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

function MinutesListContainer() {
  return (
    <Container>
      <GrayBackground />
      <TopWrapper>
        <Title />
        <LookupByCodeBtn />
      </TopWrapper>
      <MinutesListWrapper />
    </Container>
  );
}

export default MinutesListContainer;
