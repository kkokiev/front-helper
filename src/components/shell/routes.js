import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Shell from './shell';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={Shell} />
      <Route path="/test" component={Shell} />
    </Route>
  </Router>;

export default Routes;
