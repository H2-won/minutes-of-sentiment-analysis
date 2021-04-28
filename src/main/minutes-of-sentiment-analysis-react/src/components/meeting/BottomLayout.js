import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import RecodingBtn from './RecodingBtn';

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

const MuteBtn = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.white};
  color: ${palette.gray4};
  border: 1px solid ${palette.gray4};
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

const StopVideoBtn = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.white};
  color: ${palette.gray4};
  border: 1px solid ${palette.gray4};
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

const EndMeetingBtn = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.red};
  color: ${palette.white};
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

function BottomLayout() {
  return (
    <Container>
      <MainBtnsWrapper>
        <MuteBtn>
          <i className="fas fa-microphone"></i>음소거
          {/* <i class="fas fa-microphone-slash"></i> */}
        </MuteBtn>
        <StopVideoBtn>
          <i className="fas fa-video"></i>비디오 중지
          {/* <i class="fas fa-video-slash"></i> */}
        </StopVideoBtn>
        <EndMeetingBtn>
          <i className="fas fa-times"></i>회의 종료
        </EndMeetingBtn>
      </MainBtnsWrapper>
      <RecodingBtnWrapper>
        <RecodingBtn />
      </RecodingBtnWrapper>
    </Container>
  );
}

export default BottomLayout;
