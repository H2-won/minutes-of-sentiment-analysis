import React from 'react';
import styled from 'styled-components';
import RecordWrapper from './record/RecordWrapper';
import VideoContainer from './VideoContainer';

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
`;

function MeetingLayout({ match }) {
  return (
    <Container>
      <UserVideosWrapper id="videos-container">
        <VideoContainer match={match} />
      </UserVideosWrapper>
      <RecordWrapper />
    </Container>
  );
}

export default MeetingLayout;
