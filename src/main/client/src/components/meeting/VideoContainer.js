import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import connection from './RtcConnection';
import localVideoThumbnailsArr from './VideoThumbnailsClass';
import VideoThumbnailsList from './VideoThumbnailsList';
import Video from '../../Video';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { firebaseDatabaseRef, firebaseStorage } from '../../firebase';
import RecordRTC from 'recordrtc';
import { startRecording, stopRecording } from '../../controllers/meeting';
import { useDispatch, useSelector } from 'react-redux';
import { setMainVideo } from '../../modules/meeting';
import { setConnectionInfo } from '../../modules/connectionInfo';

const VideoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 0;
`;

const MainVideo = styled.div`
  margin: 2.5%;
  width: 45%;
  position: relative;
`;

const MainUserId = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const VideoContainer = ({ match }) => {
  const dispatch = useDispatch();
  const mainVideo = useSelector((state) => state.meeting.mainVideo);
  const connectionInfo = useSelector(
    (state) => state.connectionInfo.connectionInfo,
  );
  // const [mainVideo, setMainVideo] = useState(null);
  const [videoThumbnailsArr, setVideoThumbnailsArr] = useState([]);
  // const [connectionInfo, setConnectionInfo] = useState('');
  const [recordFlag, setRecordFlag] = useState(0);
  const [hostState, setHostState] = useState(false);
  const [voiceFileId, setVoiceFileId] = useState(999999);
  const databaseRef = firebaseDatabaseRef;
  const createdDate = useSelector((state) => state.createdDate.date);

  const notifyRemoteUserLeft = (name) => {
    // alert(name + ' left.');
    console.log(name + ' left.');
  };

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
    if (hostState) {
      console.log('host close!!!');
      connection.closeSocket();
    }

    SpeechRecognition.stopListening();
    window.location.href = '/main';
  };

  // ---------------------------------------------------speech recognition --------------------------------------------------------
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();

  useEffect(() => {
    connection.iceServers = [
      {
        urls: [
          'stun:stun.l.google.com:19302',
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
          'stun:stun.l.google.com:19302?transport=udp',
        ],
      },
    ];

    connection.onstream = function (event) {
      // 시작할 때 더미값 넣기
      const minutesId = localStorage.getItem('minutesId');
      const createdDate = localStorage.getItem('createdDate');
      databaseRef.push({
        flag: 2,
        minutesId: minutesId,
        senderId: 'testId',
        senderName: '테스트',
        message: 'NULL',
        time: 'NULL',
      });
      dispatch(setConnectionInfo(event.stream));

      // onstream 되자마자 stt 실행
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko-KR',
      });

      console.log('ON STREAM TEST');
      // local == 내 컴퓨터, remote == 다른 유저
      if (event.type === 'local') {
        console.log(
          localVideoThumbnailsArr.get(),
          'ON STREAM - ADD LOCAL STREAM',
        );
        dispatch(setMainVideo(event));
      } else if (event.type === 'remote') {
        localVideoThumbnailsArr.addVideo(
          <Video
            srcObject={event.stream}
            keyvalue={event.streamid}
            id={event.streamid}
            username={event.extra.username}
          />,
        );
        console.log(
          localVideoThumbnailsArr.get(),
          'ON STREAM - ADD REMOTE STREAM',
        );

        setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
      }
    };

    connection.onstreamended = (event) => {
      console.log('ON STREAM END TEST', event);
      if (event.type === 'local') {
        dispatch(setMainVideo(null));
        localVideoThumbnailsArr.set([]);
        setVideoThumbnailsArr([]);
        console.log('LOCAL STREAM CLOSING. CLOSING ALL VIDEOS - TEST');

        // --------------- 전체 음성 녹음 코드 recorder -----------------
        // var recorder = connection.recorder;
        // if (!recorder) return console.log('No recorder found.');
        // recorder.stopRecording(function () {
        //   var blob = recorder.getBlob();
        //   RecordRTC.invokeSaveAsDialog(blob);
        //   replaceAudio(URL.createObjectURL(blob));
        //   console.log(blob);

        //   connection.recorder = null;
        // });

        // // ------------ audio -------------
        // var audio = document.querySelector('audio');
        // function replaceAudio(src) {
        //   var newAudio = document.createElement('audio');
        //   newAudio.controls = true;
        //   newAudio.autoplay = true;

        //   if (src) {
        //     newAudio.src = src;
        //   }

        //   var parentNode = audio.parentNode;
        //   parentNode.innerHTML = '';
        //   parentNode.appendChild(newAudio);

        //   audio = newAudio;
        // }
      }

      if (event.type === 'remote') {
        localVideoThumbnailsArr.findAndRemove(event.streamid);
        setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
        console.log(
          `REMOTE STREAM CLOSING. CLOSING REMOTE STREAM VIDEO - TEST`,
          event,
        );

        notifyRemoteUserLeft(event.extra.username);
      }
    };

    // URL queryString 가져오기
    const open = window.location.search.split('=')[1];
    // URL 파라미터 가져오기
    const code = match.params.roomId;

    if (open === 'true') {
      // Meeting Open
      connection.open(code, function (isRoomOpened, roomid, error) {
        if (isRoomOpened === true) {
        } else {
          if (error === 'Room not available') {
            alert('이미 존재하는 방입니다. 새로운 방을 만들거나 참가하세요!');
            window.location.href = '/main';
            return;
          }
          alert(error + 'error log');
        }
      });

      // 로그인한 user id와 미팅을 만든 host id를 비교해서 host 여부 설정
      if (localStorage.getItem('userId') === localStorage.getItem('hostId'))
        setHostState(true);
    } else {
      // Meeting Join
      connection.join(code, function (isJoinedRoom, roomid, error) {
        if (error) {
          if (error === 'Room not available') {
            alert('존재하지 않는 방입니다. 새로운 방을 만들거나 참가하세요!');
            window.location.href = '/main';
            return;
          }
          alert(error + ' error log');
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   // 말 시작 시 record 시작
  //   if (interimTranscript !== '') {
  //     var recorder = connection.recorder;
  //     if (!recorder) {
  //       recorder = RecordRTC([connectionInfo], {
  //         type: 'audio',
  //       });
  //       recorder.startRecording();
  //       connection.recorder = recorder;
  //     } else {
  //       recorder.getInternalRecorder().addStreams([connectionInfo]);
  //     }

  //     if (!connection.recorder.streams) {
  //       connection.recorder.streams = [];
  //     }
  //     // connection.recorder.streams.push(event.stream);
  //   }
  // }, [interimTranscript]);

  useEffect(() => {
    // --- 말 끝날때마다 record 파일 firebase storage에 삽입 ---
    if (finalTranscript !== '') {
      var recorder = connection.recorder;
      if (!recorder) return console.log('finalTranscript쪽 No recorder found.');
      recorder.stopRecording(function () {
        var file = recorder.getBlob();

        if (!file) {
          throw 'Blob object is required.';
        }

        if (!file.type) {
          try {
            file.type = 'audio/wav;codecs=opus';
          } catch (e) {}
        }

        var fileFullName =
          voiceFileId +
          '_' +
          Math.floor(Math.random() * 1000000000) +
          '.' +
          'wav';
        setVoiceFileId(voiceFileId - 1);
        if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
          return navigator.msSaveOrOpenBlob(file, fileFullName);
        } else if (typeof navigator.msSaveBlob !== 'undefined') {
          return navigator.msSaveBlob(file, fileFullName);
        }

        var storage = firebaseStorage;
        var storageUpRef = storage.ref(fileFullName);
        var task = storageUpRef.put(file);
        task.on(
          'state_changed',
          function (snapshot) {
            console.log('업로드 진행중'); // 업로드 진행시 호출
          },
          function (error) {
            // 업로드 중간에 에러 발생시 호출
            console.log(error);
          },
          function () {
            // 업로드 완료시
            console.log('업로드 완료');
          },
        );

        connection.recorder = null;
      });

      // recorder 중지하고 stt도 중지해주기
      SpeechRecognition.stopListening();
    }
  }, [finalTranscript]);

  useEffect(() => {
    // --- finalTranscript 말 끝날때마다 firebase database에 삽입 ---
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
      resetTranscript();

      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');
      const minutesId = localStorage.getItem('minutesId');
      let createdDate = localStorage.getItem('createdDate');
      if (createdDate === null || createdDate === undefined) {
        createdDate = 'NULL';
      }
      databaseRef.push({
        flag: recordFlag,
        minutesId: minutesId,
        senderId: userId,
        senderName: userName,
        message: finalTranscript + '.',
        time: createdDate,
      });
    }
  }, [finalTranscript, resetTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      'Your browser does not support speech recognition software! Try Chrome desktop, maybe?',
    );
  }

  return (
    <div>
      {/* <div>
        <div>
          <span>listening: {listening ? 'on' : 'off'}</span>
        </div>
        <div>
          <span>{transcript}</span>
        </div>
      </div> */}
      <VideoWrapper>
        <MainVideo>
          {mainVideo && (
            <Video
              srcObject={mainVideo.stream}
              mainvideo="true"
              muted
              keyvalue={mainVideo.streamid}
              username={mainVideo.extra.username}
            />
          )}
          {/*<MainUserId>{mainVideo && mainVideo.extra.username}</MainUserId>*/}
        </MainVideo>
        <VideoThumbnailsList videos={videoThumbnailsArr} />
      </VideoWrapper>
    </div>
  );
};

export default VideoContainer;
