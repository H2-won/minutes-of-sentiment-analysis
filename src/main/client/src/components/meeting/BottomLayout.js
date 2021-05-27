import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import EndMeetingBtn from './buttons/EndMeetingBtn';
import MuteToggleBtn from './buttons/MuteToggleBtn';
import RecordingBtn from './buttons/RecordingBtn';
import VideoToggleBtn from './buttons/VideoToggleBtn';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;

  border-top: 0.5px solid ${palette.gray2};
`;

const MainBtnsWrapper = styled.div`
  width: 72.5%;
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 5rem;
  }
`;

const RecordingBtnWrapper = styled.div`
  width: 27.5%;
  display: flex;
  justify-content: center;
`;

function BottomLayout({ match }) {
  return (
    <Container>
      <MainBtnsWrapper>
        <MuteToggleBtn />
        <VideoToggleBtn />
        <EndMeetingBtn />
      </MainBtnsWrapper>
      <RecordingBtnWrapper>
        <RecordingBtn match={match} />
      </RecordingBtnWrapper>
    </Container>
  );
}

export default BottomLayout;
