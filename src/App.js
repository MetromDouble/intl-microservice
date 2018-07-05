import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Error404 from './pages/Error404';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/*" component={Error404} />
  </Switch>
);


export default App;
