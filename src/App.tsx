import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { history } from './redux/history';
import SingIn from './pages/singIn/SingIn';
import Test from './components/Test';
import logo from './logo.svg';
import './App.css';
import Error from './pages/error/Error';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/singIn" component={SingIn} />
        <Route path="/error" component={Error} />
        <Redirect push to={'error'} />
      </Switch>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
      </div>
    </Router>
  );
}

export default App;
