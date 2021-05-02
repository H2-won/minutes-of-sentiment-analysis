import React from 'react';
import styled from 'styled-components';
import RecordWrapper from './record/RecordWrapper';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
`;

const UserVideoWrapper = styled.div`
  position: relative;
  width: 77.5%;
  height: 100%;
`;

function MeetingLayout() {
  return (
    <Container>
      <UserVideoWrapper></UserVideoWrapper>
      <RecordWrapper />
    </Container>
  );
}

export default MeetingLayout;
