import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import BottomLayout from '../components/meeting/BottomLayout';
import MeetingLayout from '../components/meeting/MeetingLayout';
// import VideoContainer from '../components/meeting/VideoContainer';
import palette from '../lib/styles/palette';

const Container = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: ${palette.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function MeetingRoomContainer() {
  return (
    <Container>
      {/* <Helmet>
        <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js" />
        <script src="https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js" />
        <script src="node_modules/webrtc-adapter/out/adapter.js" />
        <script src="https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js" />
        <link rel="stylesheet" href="css/getHTMLMediaElement.css" />
        <script src="./getHTMLMediaElement.js" />
        <script src="node_modules/recordrtc/RecordRTC.js" />
        <script src="./meeting.js" />
        <script src="https://www.webrtc-experiment.com/common.js" />
      </Helmet> */}
      <MeetingLayout />
      <BottomLayout />
      <div id="result">
        <span className="final" id="final_span"></span>
        <span className="interim" id="interim_span"></span>
      </div>
      {/* <div
        id="room-urls"
        style="text-align: center;display: none;background: #F1EDED;margin: 15px -10px;border: 1px solid rgb(189, 189, 189);border-left: 0;border-right: 0;"
      ></div> */}
    </Container>
  );
}

export default MeetingRoomContainer;
