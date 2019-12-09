import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createHashHistory } from 'history'

import UserRouter from './routes/userRouter';
import AboutRouter from './routes/aboutRouter';

const AppRouter = function () {
  return (
    <Router history={createHashHistory()}>
      <Redirect from="/" to="/about" />
      <Switch>
        <Route path="/users" component={UserRouter} />
        <Route path="/about" component={AboutRouter} />
      </Switch>
    </Router>
  )
}

export default AppRouter;

