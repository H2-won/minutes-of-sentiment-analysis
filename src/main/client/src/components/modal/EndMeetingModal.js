import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import connection from '../meeting/RtcConnection';
import SpeechRecognition from 'react-speech-recognition';

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

function EndMeetingModal({ ModalOff, args }) {
  const closeSocket = () => {
    console.log('START CLOSE SOCKET TEST');

    connection.getAllParticipants().forEach(function (pid) {
      console.log('TEST DISCONECT WITH PEERS', pid);
      connection.disconnectWith(pid);
    });

    // stop all local cameras
    connection.attachStreams.forEach(function (localStream) {
      console.log(localStream, 'CLOSE LOCAL STREAM - TEST');
      localStream.stop();
    });

    // last user will have to close the socket
    // 로그인한 user id와 미팅을 만든 host id를 비교해서 host 여부 설정
    if (localStorage.getItem('userId') === localStorage.getItem('hostId')) {
      console.log('host close!!!');
      connection.closeSocket();
    }

    SpeechRecognition.stopListening();
    window.location.href = '/main';
  };

  return (
    <Container>
      <BtnWrapper>
        <OkBtn color={args.okBtnBackgroundColor} onClick={closeSocket}>
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default EndMeetingModal;
