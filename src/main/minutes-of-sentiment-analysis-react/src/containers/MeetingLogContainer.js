import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/meetingLog/navigation/Navigation';
import palette from '../lib/styles/palette';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: ${palette.gray1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

function MeetingLogContainer() {
  return (
    <Container>
      <Navigation></Navigation>
    </Container>
  );
}

export default MeetingLogContainer;
