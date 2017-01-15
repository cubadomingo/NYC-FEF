import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import ReactDOM from 'react-dom';
import Header from './components/layout/header';
import SimpleReact from './components/simpleReact/simple-react';
import TestRouter from './components/testRouter/test-router';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Match exactly pattern="/" component={SimpleReact} />
          <Match pattern="/test-router" component={TestRouter} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
