import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Shell from './shell';
import Flexbox from '../flexbox/flexbox';
import MarkdownEditor from '../markdown-editor/markdown-editor';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={Flexbox} />
      <Route path="/markdown-editor" component={MarkdownEditor} />
    </Route>
  </Router>;

export default Routes;
