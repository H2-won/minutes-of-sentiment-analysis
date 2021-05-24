import React from 'react';
import styled from 'styled-components';
import BottomLayout from '../components/meeting/BottomLayout';
import MeetingLayout from '../components/meeting/MeetingLayout';
import palette from '../lib/styles/palette';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: ${palette.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function MeetingRoomContainer({ match }) {
  return (
    <Container>
      <MeetingLayout match={match} />
      <BottomLayout />
    </Container>
  );
}

export default MeetingRoomContainer;
