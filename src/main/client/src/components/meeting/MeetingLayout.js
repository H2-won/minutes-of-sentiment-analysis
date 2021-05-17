import React from 'react';
import styled from 'styled-components';
import RecordWrapper from './record/RecordWrapper';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
`;

const UserVideosWrapper = styled.div`
  position: relative;
  width: 77.5%;
  height: 100%;

  video {
    width: 50%;
  }
`;

function MeetingLayout() {
  return (
    <Container>
      <UserVideosWrapper id="videos-container"></UserVideosWrapper>
      <RecordWrapper />
    </Container>
  );
}

export default MeetingLayout;
