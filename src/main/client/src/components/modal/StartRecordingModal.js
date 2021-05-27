import React from 'react';
import styled, { css } from 'styled-components';
import { startRecording } from '../../controllers/meeting';
import { firebaseDatabaseRef } from '../../firebase';
import palette from '../../lib/styles/palette';
import SpeechRecognition from 'react-speech-recognition';
import { useDispatch } from 'react-redux';

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

function StartRecordingModal({ ModalOff, args }) {
  const dispatch = useDispatch();

  const onStartRecording = () => {
    // style 변경을 위한 setRecordState
    args.setRecordState('recording');

    // 기록 시작
    const createdDate = new Date();
    dispatch(setCreatedDate(createdDate));

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const minutesId = localStorage.getItem('minutesId');
    const code = args.match.params.roomId;
    startRecording(code);
    firebaseDatabaseRef.push({
      flag: 1,
      minutesId: minutesId,
      senderId: userId,
      senderName: userName,
      message: '',
      time: '00:00:00',
    });

    // modal 닫기
    ModalOff();
  };

  return (
    <Container>
      <BtnWrapper>
        <OkBtn color={args.okBtnBackgroundColor} onClick={onStartRecording}>
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default StartRecordingModal;
