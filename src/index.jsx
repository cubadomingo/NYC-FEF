import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/layout/layout';
import SimpleReact from './components/simpleReact/simple-react';
import ReactRedux from './components/reactRedux/react-redux';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={SimpleReact} />
      <Route path="/react-redux" component={ReactRedux} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
