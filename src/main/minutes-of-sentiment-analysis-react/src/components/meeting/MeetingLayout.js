import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
`;

const UserVideoWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
`;

const VoiceRecordWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
`;

function MeetingLayout() {
  return (
    <Container>
      <UserVideoWrapper></UserVideoWrapper>
      <VoiceRecordWrapper></VoiceRecordWrapper>
    </Container>
  );
}

export default MeetingLayout;
