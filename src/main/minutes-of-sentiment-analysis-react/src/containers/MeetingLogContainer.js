import React from 'react';
import styled from 'styled-components';
import ConferenceCode from '../components/meeting/record/ConferenceCode';
import Record from '../components/meeting/record/Record';
import RecordWrapper from '../components/meeting/record/RecordWrapper';
import Title from '../components/meeting/record/Title';
import Navigation from '../components/meetingLog/navigation/Navigation';
import palette from '../lib/styles/palette';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: ${palette.gray1};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
`;

function MeetingLogContainer() {
  return (
    <Container>
      <Navigation></Navigation>
      <RecordWrapper>
        <Title />
        <ConferenceCode />
        <Record />
      </RecordWrapper>
    </Container>
  );
}

export default MeetingLogContainer;
