import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Shell from './shell';
import Flexbox from '../flexbox/flexbox';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={Flexbox} />
      <Route path="/test" component={Shell} />
    </Route>
  </Router>;

export default Routes;
