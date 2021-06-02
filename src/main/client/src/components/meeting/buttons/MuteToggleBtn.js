import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import SpeechRecognition from 'react-speech-recognition';
import { setMainVideo } from '../../../modules/meeting';
import connection from '../RtcConnection';
import RecordRTC from 'recordrtc';
// import {setConnectionInfo} from "../../../modules/connectionInfo";

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.white};
  transition: 0.3s all;
  ${({ state }) =>
    state
      ? css`
          color: ${palette.orange1};
          border: 1px solid ${palette.orange1};
        `
      : css`
          color: ${palette.red};
          border: 1px solid ${palette.red};
        `}
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

function MuteToggleBtn() {
  const [muteState, setMuteState] = useState(true);
  const dispatch = useDispatch();
  const mainVideo = useSelector((state) => state.meeting.mainVideo);
  const connectionInfo = useSelector(
    (state) => state.connectionInfo.connectionInfo,
  );

  const onToggleMute = () => {
    setMuteState(!muteState);

    console.log('main getAudioTracks = ', mainVideo.stream.getAudioTracks());
    // 마이크 음소거 해제 -> STT와 녹음(recorder) 시작, 아니면 종료
    if (!mainVideo.stream.getAudioTracks()[0].enabled) {
      console.log('음소거 해제!!!');
      // 음성 파일 녹음 시작
      console.log('connectionInfo : ', connectionInfo);
      var recorder = connection.recorder;
      if (!recorder) {
        recorder = RecordRTC([connectionInfo], {
          type: 'audio',
        });
        recorder.startRecording();
        connection.recorder = recorder;
      } else {
        recorder.getInternalRecorder().addStreams([connectionInfo]);
      }

      if (!connection.recorder.streams) {
        connection.recorder.streams = [];
      }

      // stt 시작
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko-KR',
      });
    } else {
      console.log('음소거 하기!!!');
      SpeechRecognition.stopListening();
    }
    mainVideo.stream.getAudioTracks()[0].enabled =
      !mainVideo.stream.getAudioTracks()[0].enabled;

    // audiotrack 상태 변경되었으니 다시 메인 비디오 set
    // 없어도 될수도 있으니 테스트 해보기
    dispatch(setMainVideo(mainVideo));
    dispatch(setConnectionInfo(connectionInfo));
  };

  return (
    <Button onClick={onToggleMute} state={muteState}>
      {muteState ? (
        <>
          <i className="fas fa-microphone"></i>음소거
        </>
      ) : (
        <>
          <i className="fas fa-microphone-slash"></i>음소거 해제
        </>
      )}
    </Button>
  );
}

export default MuteToggleBtn;
