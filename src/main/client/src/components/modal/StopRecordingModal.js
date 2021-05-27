import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import SpeechRecognition from 'react-speech-recognition';
import { firebaseDatabaseRef } from '../../firebase';
import { stopRecording } from '../../controllers/meeting';

const Container = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const OkBtn = styled.button`
  width: 140px;
  height: 60px;
  background: ${({ color }) =>
    color === 'orange'
      ? css`
          ${palette.orange1}
        `
      : css`
          ${palette.red}
        `};
  color: ${palette.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const CancleBtn = styled.button`
  width: 140px;
  height: 60px;
  background: ${palette.gray2};
  color: ${palette.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-left: 32px;
`;

function StopRecordingModal({ ModalOff, args }) {
  const onStopRecording = () => {
    // style 변경을 위한 recordState
    args.setRecordState('end');

    // 기록 종료
    SpeechRecognition.stopListening();
    const now = new Date();
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const minutesId = localStorage.getItem('minutesId');
    stopRecording(minutesId);
    firebaseDatabaseRef.push({
      flag: -1,
      minutesId: minutesId,
      senderId: userId,
      senderName: userName,
      message: minutesId,
      time: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
    });

    // modal 닫기
    ModalOff();
  };
  return (
    <Container>
      <BtnWrapper>
        <OkBtn color={args.okBtnBackgroundColor} onClick={onStopRecording}>
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default StopRecordingModal;
