import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import MinutesListPage from './pages/MinutesListPage';
import MeetingRoomPage from './pages/MeetingRoomPage';

import Header from './containers/Header';
import Modal from './containers/modal/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={StartPage} exact />
        <Route path="/main" component={MainPage} />
        <Route path="/minuteslist" component={MinutesListPage} />
        <Route path="/meeting" component={MeetingRoomPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>Page 404.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
