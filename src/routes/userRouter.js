import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Users from '../pages/users/index';

const onEnter = (nextState, replaceState, cb) => {
  console.log(nextState, replaceState, '状态');
}
const UserRouter = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/user`} exact component={Users} onEnter={onEnter}/>
    </Switch>
  )
}

export default UserRouter;
