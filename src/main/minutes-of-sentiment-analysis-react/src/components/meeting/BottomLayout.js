import React from 'react';
import styled from 'styled-components';
import EndMeetingBtn from './buttons/EndMeetingBtn';
import MuteToggleBtn from './buttons/MuteToggleBtn';
import RecodingBtn from './buttons/RecodingBtn';
import VideoToggleBtn from './buttons/VideoToggleBtn';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const MainBtnsWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 5rem;
  }
`;

const RecodingBtnWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

function BottomLayout() {
  return (
    <Container>
      <MainBtnsWrapper>
        <MuteToggleBtn />
        <VideoToggleBtn />
        <EndMeetingBtn />
      </MainBtnsWrapper>
      <RecodingBtnWrapper>
        <RecodingBtn />
      </RecodingBtnWrapper>
    </Container>
  );
}

export default BottomLayout;
