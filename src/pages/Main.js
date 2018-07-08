import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import EditorScreen from '../components/EditorScreen';
import Dashboard from './Dashboard';
import Error404 from './Error404';
import Header from '../components/Header';

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/manage" component={EditorScreen} />
        <Route path="/*" component={Error404} />
      </Switch>
    </div>
  );
};

export default compose(
  withRouter
)(Main);
