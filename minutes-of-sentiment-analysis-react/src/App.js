import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import Header from './containers/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={StartPage} exact />
        <Route page="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
