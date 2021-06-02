import React, { useState } from 'react';
import styled from 'styled-components';
import ConferenceCode from '../components/meetingLog/record/ConferenceCode';
import Record from '../components/meetingLog/record/Record';
import RecordWrapper from '../components/meetingLog/record/RecordWrapper';
import Title from '../components/meetingLog/record/Title';
import Bookmark from '../components/meetingLog/content/Bookmark';
import GraphAndKeyword from '../components/meetingLog/content/GraphAndKeyword';
import Summary from '../components/meetingLog/content/Summary';
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
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function MeetingLogContainer() {
  const [activeMenuState, setActiveMenuState] = useState(0);
  const [bookmarkInfo, setBookmarkInfo] = useState([]);
  const [recordData, setRecordData] = useState([]);
  const [addBtnState, setAddBtnState] = useState([]);

  return (
    <Container>
      <Navigation
        activeMenuState={activeMenuState}
        setActiveMenuState={setActiveMenuState}
      ></Navigation>
      <ContentWrapper>
        <MeetingInfo />
        {activeMenuState === 0 && (
          <GraphAndKeyword id={localStorage.getItem('minutesId')} />
        )}
        {activeMenuState === 1 && (
          <Bookmark
            bookmarkInfo={bookmarkInfo}
            setBookmarkInfo={setBookmarkInfo}
            recordData={recordData}
            setRecordData={setRecordData}
            setAddBtnState={setAddBtnState}
          />
        )}
        {activeMenuState === 2 && <Summary />}
      </ContentWrapper>
      <RecordWrapper
        setBookmarkInfo={setBookmarkInfo}
        recordData={recordData}
        setRecordData={setRecordData}
        addBtnState={addBtnState}
        setAddBtnState={setAddBtnState}
      />
    </Container>
  );
}

export default MeetingLogContainer;
