import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import ConferenceCode from './ConferenceCode';
import Record from './Record';
import Title from './Title';

const Container = styled.div`
  position: relative;
  width: 27.5%;
  height: 100%;
  border-left: 0.5px solid ${palette.gray2};
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${palette.gray2};
  }
`;

const TopWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

function RecordWrapper() {
  return (
    <Container>
      <TopWrapper>
        <Title />
        <ConferenceCode />
      </TopWrapper>
      <Record />
    </Container>
  );
}

export default RecordWrapper;
