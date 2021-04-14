import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import Header from './containers/Header';
import Modal from './containers/modal/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={StartPage} exact />
        <Route page="/main" component={MainPage} />
      </Switch>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
