import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/about/index';

const AboutRouter = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={About} />
    </Switch>
  )
}

export default AboutRouter;