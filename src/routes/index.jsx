import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router';
import Header from '../components/layout/header';
import SimpleReact from '../components/simpleReact/simple-react';
import TestRouter from '../components/testRouter/test-router';

// eslint-disable-next-line
export default class Routes extends Component {
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
