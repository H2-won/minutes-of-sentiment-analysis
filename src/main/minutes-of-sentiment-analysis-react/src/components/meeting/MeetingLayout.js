import React from 'react';
import styled from 'styled-components';
import RecordWrapper from './record/RecordWrapper';
import connection from './RtcConnection';
import VideoContainer from './VideoContainer';
import VideoContainerTest from './VideoContainerTest';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
`;

const UserVideosWrapper = styled.div`
  position: relative;
  width: 77.5%;
  height: 100%;

  video {
    width: 50%;
  }
`;

function MeetingLayout() {
  // const staticId = 'qwe123';

  // const openOrJoin = () => {
  //   connection.openOrJoin(staticId);
  // };
  // openOrJoin();
  // connection.openOrJoin('qwe123');
  // connection.open('qwe123', function (isRoomOpened, roomid, error) {
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

  // connection.iceServers = [
  //   {
  //     urls: [
  //       'stun:stun.l.google.com:19302',
  //       'stun:stun1.l.google.com:19302',
  //       'stun:stun2.l.google.com:19302',
  //       'stun:stun.l.google.com:19302?transport=udp',
  //     ],
  //   },
  // ];

  return (
    <Container>
      {/* <VideoContainerTest /> */}
      <UserVideosWrapper id="videos-container"></UserVideosWrapper>
      <RecordWrapper />
    </Container>
  );
}

export default MeetingLayout;
