import React from 'react';
import styled from 'styled-components';
import RecordWrapper from './record/RecordWrapper';

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
`;

function MeetingLayout() {
  // const scriptInsert = () => {
  //   const script = document.createElement('script');
  //   script.src = 'https://www.gstatic.com/firebasejs/4.9.0/firebase.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   const script1 = document.createElement('script');
  //   script1.src =
  //     'https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js';
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.src = '/node_modules/webrtc-adapter/out/adapter.js';
  //   script2.async = true;
  //   document.body.appendChild(script2);

  //   const script3 = document.createElement('script');
  //   script3.src =
  //     'https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js';
  //   script3.async = true;
  //   document.body.appendChild(script3);

  //   const script4 = document.createElement('script');
  //   script4.src = './getHTMLMediaElement.js';
  //   script4.async = true;
  //   document.body.appendChild(script4);

  //   const script5 = document.createElement('script');
  //   script5.src = '/node_modules/recordrtc/RecordRTC.js';
  //   script5.async = true;
  //   document.body.appendChild(script5);

  //   const script6 = document.createElement('script');
  //   script6.src = './meeting.js';
  //   script6.async = true;
  //   document.body.appendChild(script6);

  //   const script7 = document.createElement('script');
  //   script7.src = 'https://www.webrtc-experiment.com/common.js';
  //   script7.async = true;
  //   document.body.appendChild(script7);
  // };

  // scriptInsert();
  const connection = new RTCMultiConnection();

  return (
    <Container>
      <UserVideosWrapper id="videos-container"></UserVideosWrapper>
      <RecordWrapper />
      {/* {renderHTML(`<section class="make-center">
    <div>
        <br><br>

        <input type="text" id="room-id" readOnly>
        <br>
        <br>
        <button id="open-room">방 생성</button>
        <button id="join-room">방 참여</button>
        <button id="open-or-join-room">없는 코드면 생성 있는 코드면 참가</button>
    </div>

    <div id="videos-container" style="margin: 20px 0;"></div>
</section>
`)} */}
    </Container>
  );
}

export default MeetingLayout;
