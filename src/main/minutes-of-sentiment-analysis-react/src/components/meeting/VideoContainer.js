import React, { useState } from 'react';
import Video from '../../Video';
import connection from './RtcConnection';
import localVideoThumbnailsArr from './VideoThumbnailsClass';
import VideoThumbnailsList from './VideoThumbnailsList';
import firebase from 'firebase/app';
import 'firebase/auth';
import RecordRTC from 'recordrtc';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import webkitSpeechRecognition from 'react-speech-recognition';

const VideoContainer = () => {
  //   const [mainVideo, setMainVideo] = useState(null);
  //   const [videoThumbnailsArr, setVideoThumbnailsArr] = useState([]);

  //   connection.onstream = function (event) {
  //     const connectionInfo = event.stream;
  //     console.log('ON STREAM TEST');
  //     if (event.type === 'local') {
  //       console.log(
  //         localVideoThumbnailsArr.get(),
  //         'ON STREAM - ADD LOCAL STREAM',
  //       );

  //       setMainVideo(event);
  //     } else if (event.type === 'remote') {
  //       localVideoThumbnailsArr.addVideo(
  //         <Video
  //           srcObject={event.stream}
  //           keyvalue={event.streamid}
  //           id={event.streamid}
  //           username={event.extra.username}
  //         />,
  //       );
  //       console.log(
  //         localVideoThumbnailsArr.get(),
  //         'ON STREAM - ADD REMOTE STREAM',
  //       );

  //       setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
  //     }

  //     // -------------------------------------------------- //
  //     const firebaseConfig = {
  //       apiKey: 'AIzaSyCAPq36ZvGSEcdGX9OXEmrMlh_Fd2h_1CA',
  //       authDomain: 'emotional-minutes.firebaseapp.com',
  //       databaseURL: 'https://emotional-minutes-default-rtdb.firebaseio.com',
  //       projectId: 'emotional-minutes',
  //       storageBucket: 'emotional-minutes.appspot.com',
  //       messagingSenderId: '16714778368',
  //       appId: '1:16714778368:web:f4d9f21b223a7b9878d5e5',
  //       measurementId: 'G-H3H5BEWXPY',
  //     };

  //     const yourId = Math.floor(Math.random() * 1000000000);
  //     firebase.initializeApp(firebaseConfig);
  //     const database = firebase.database().ref();

  //     const recognition = new webkitSpeechRecognition();
  //     const language = 'ko-KR';
  //     let isRecognizing = false;
  //     let ignoreEndProcess = false;
  //     let finalTranscript = '';

  //     recognition.continuous = true;
  //     recognition.interimResults = true;

  //     /**
  //      * 음성 인식 시작 처리
  //      */
  //     recognition.onstart = function () {
  //       console.log('onstart', arguments);
  //       isRecognizing = true;
  //     };
  //     /**
  //      * 음성 인식 종료 처리
  //      */
  //     recognition.onend = function () {
  //       console.log('onend', arguments);
  //       isRecognizing = false;

  //       if (ignoreEndProcess) {
  //         return false;
  //       }

  //       // DO end process
  //       if (!finalTranscript) {
  //         console.log('empty finalTranscript');
  //         return false;
  //       }
  //     };

  //     /**
  //      * 음성 인식 결과 처리
  //      */
  //     let checkRecord = false;
  //     recognition.onresult = function (event) {
  //       console.log('onresult', event);

  //       // 발화 녹음 테스트 시작
  //       if (!checkRecord) {
  //         checkRecord = true;

  //         var recorder = connection.recorder;
  //         if (!recorder) {
  //           recorder = RecordRTC([connectionInfo], {
  //             type: 'audio',
  //           });
  //           recorder.startRecording();
  //           connection.recorder = recorder;
  //         } else {
  //           recorder.getInternalRecorder().addStreams([connectionInfo]);
  //         }

  //         if (!connection.recorder.streams) {
  //           connection.recorder.streams = [];
  //         }

  //         connection.recorder.streams.push(event.stream);
  //       }
  //       // 발화 녹음 테스트 끝

  //       let interimTranscript = '';
  //       if (typeof event.results === 'undefined') {
  //         recognition.onend = null;
  //         recognition.stop();
  //         return;
  //       }

  //       for (let i = event.resultIndex; i < event.results.length; ++i) {
  //         const transcript = event.results[i][0].transcript;

  //         if (event.results[i].isFinal) {
  //           finalTranscript += transcript;
  //           // 발화가 끝나면 데이터베이스에 저장
  //           let msg = database.push({
  //             sender: yourId,
  //             message: transcript,
  //           });
  //           msg.remove();

  //           // 발화 녹음 테스트 시작
  //           var recorder = connection.recorder;
  //           if (!recorder) return alert('No recorder found.');
  //           recorder.stopRecording(function () {
  //             var blob = recorder.getBlob();
  //             RecordRTC.invokeSaveAsDialog(blob);

  //             checkRecord = false;
  //             connection.recorder = null;
  //           });
  //           // 발화 녹음 테스트 끝
  //         } else {
  //           interimTranscript += transcript;
  //         }
  //       }
  //     };

  //     function readMessage(data) {
  //       console.log(data.val().sender);
  //       console.log(data.val().message);
  //     }

  //     database.on('child_added', readMessage);

  //     /**
  //      * 음성 인식 트리거
  //      */
  //     function start() {
  //       if (isRecognizing) {
  //         recognition.stop();
  //         return;
  //       }
  //       recognition.lang = language;
  //       recognition.start();
  //       console.log('start recognition');
  //       ignoreEndProcess = false;

  //       finalTranscript = '';
  //       // final_span.innerHTML = '';
  //       // interim_span.innerHTML = '';
  //     }

  //     start();
  //     // -------------------------------------------------- //
  //   };

  //   connection.onstreamended = (event) => {
  //     console.log('ON STREAM END TEST', event);
  //     if (event.type === 'local') {
  //       setMainVideo(null);
  //       localVideoThumbnailsArr.set([]);
  //       setVideoThumbnailsArr([]);
  //       console.log('LOCAL STREAM CLOSING. CLOSING ALL VIDEOS - TEST');
  //     }

  //     if (event.type === 'remote') {
  //       localVideoThumbnailsArr.findAndRemove(event.streamid);
  //       setVideoThumbnailsArr([...localVideoThumbnailsArr.get()]);
  //       console.log(
  //         `REMOTE STREAM CLOSING. CLOSING REMOTE STREAM VIDEO - TEST`,
  //         event,
  //       );

  //       notifyRemoteUserLeft(event.extra.username);
  //     }
  //   };

  //   const notifyRemoteUserLeft = (name) => {
  //     alert(name + ' left.');
  //   };

  //   const closeSocket = function () {
  //     console.log('START CLOSE SOCKET TEST');

  //     connection.getAllParticipants().forEach(function (pid) {
  //       console.log('TEST DISCONECT WITH PEERS', pid);
  //       connection.disconnectWith(pid);
  //     });

  //     // stop all local cameras
  //     connection.attachStreams.forEach(function (localStream) {
  //       console.log(localStream, 'CLOSE LOCAL STREAM - TEST');
  //       localStream.stop();
  //     });

  //     // last user will have to close the socket
  //     // connection.closeSocket();
  //   };

  //   // room ID.
  //   const staticId = 'qwe123';

  //   const openOrJoin = () => {
  //     connection.openOrJoin(staticId);
  //   };
  //   return (
  //     <div>
  //       <div id="video-container">
  //         <div id="main-video">
  //           {mainVideo && (
  //             <Video
  //               srcObject={mainVideo.stream}
  //               mainvideo="true"
  //               keyvalue={mainVideo.streamid}
  //             />
  //           )}
  //           {mainVideo && mainVideo.extra.username}
  //         </div>
  //         <VideoThumbnailsList videos={videoThumbnailsArr} />
  //       </div>
  //       <div className="action-buttons">
  //         {!mainVideo && (
  //           <button className="btn" onClick={() => openOrJoin()}>
  //             Join
  //           </button>
  //         )}
  //         {mainVideo && (
  //           <button className="btn" onClick={() => closeSocket()}>
  //             Close
  //           </button>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default VideoContainer;

  const [mainVideo, setMainVideo] = useState(null);
  const [videoThumbnailsArr, setVideoThumbnailsArr] = useState([]);

  connection.onstream = function (event) {
    console.log('ON STREAM TEST');
    if (event.type === 'local') {
      console.log(
        localVideoThumbnailsArr.get(),
        'ON STREAM - ADD LOCAL STREAM',
      );

      setMainVideo(event);
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
      setMainVideo(null);
      localVideoThumbnailsArr.set([]);
      setVideoThumbnailsArr([]);
      console.log('LOCAL STREAM CLOSING. CLOSING ALL VIDEOS - TEST');
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

  const notifyRemoteUserLeft = (name) => {
    alert(name + ' left.');
  };

  const closeSocket = function () {
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
    // connection.closeSocket();
  };

  // room ID.
  const staticId = 'qwe123';

  const openOrJoin = () => {
    connection.openOrJoin(staticId);
    // connection.openOrJoin('qwe123', function (isRoomOpened, roomid, error) {
    //   if (isRoomOpened === true) {
    //     console.log(roomid);
    //   } else {
    //     if (error === 'Room not available') {
    //       alert('이미 존재하는 방입니다. 새로운 방을 만들거나 참가하세요!');
    //       return;
    //     }
    //     alert(error);
    //   }
    // });
  };
  return (
    <div>
      <div id="video-container">
        <div id="main-video">
          {mainVideo && (
            <Video
              srcObject={mainVideo.stream}
              mainvideo="true"
              keyvalue={mainVideo.streamid}
            />
          )}
          {mainVideo && mainVideo.extra.username}
        </div>
        <VideoThumbnailsList videos={videoThumbnailsArr} />
      </div>
      <div className="action-buttons">
        {!mainVideo && (
          <button className="btn" onClick={() => openOrJoin()}>
            Join
          </button>
        )}
        {mainVideo && (
          <button className="btn" onClick={() => closeSocket()}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
