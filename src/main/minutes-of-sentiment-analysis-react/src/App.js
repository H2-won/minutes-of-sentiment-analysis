import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import MinutesListPage from './pages/MinutesListPage';
import MeetingRoomPage from './pages/MeetingRoomPage';
import OAuth2RedirectHandler from './handlers/OAuth2RedirectHandler';

import Header from './containers/Header';
import Modal from './containers/modal/index';
import MeetingLogPage from './pages/MeetingLogPage';

const AppLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      {/* <Helmet>
        <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
        <script src="https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js"></script>
        <script src="../node_modules/webrtc-adapter/out/adapter.js"></script>
        <script src="https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js"></script>
        <script type="text/javascript" src="getHTMLMediaElement.js"></script>
        <script type="text/javascript" src="meeting.js"></script>
      </Helmet> */}
      <AppLayout>
        <Header />
        <Switch>
          <Route path="/" component={StartPage} exact />
          <Route path="/main" component={MainPage} />
          <Route path="/minuteslist" component={MinutesListPage} />
          <Route path="/meeting" component={MeetingRoomPage} />
          <Route path="/meetinglog" component={MeetingLogPage} />
          <Route exact path="/room/:roomId" component={Room} />
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
          <Route
            render={({ location }) => (
              <div>
                <h2>Page 404.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </AppLayout>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
