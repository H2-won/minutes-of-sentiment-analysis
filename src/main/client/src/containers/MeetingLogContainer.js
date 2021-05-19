import React from 'react';
import styled from 'styled-components';
import ConferenceCode from '../components/meeting/record/ConferenceCode';
import Record from '../components/meeting/record/Record';
import RecordWrapper from '../components/meeting/record/RecordWrapper';
import Title from '../components/meeting/record/Title';
import Bookmark from '../components/meetingLog/content/Bookmark';
import MeetingInfo from '../components/meetingLog/MeetingInfo';
import Navigation from '../components/meetingLog/navigation/Navigation';
import Audio from '../components/meetingLog/record/Audio';
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

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function MeetingLogContainer() {
  return (
    <Container>
      <Navigation></Navigation>
      <ContentWrapper>
        <MeetingInfo />
        <Bookmark />
      </ContentWrapper>
      <RecordWrapper>
        <Audio />
        <Title />
        <ConferenceCode />
        <Record />
      </RecordWrapper>
    </Container>
  );
}

export default MeetingLogContainer;
