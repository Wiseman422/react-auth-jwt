import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import AuthenticationComponent from './components/AuthenticationComponent';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={AuthenticationComponent} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
