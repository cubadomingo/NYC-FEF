import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router';
import NavBar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import SimpleReact from '../components/simpleReact/simple-react';

// eslint-disable-next-line
export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Match exactly pattern="/" component={SimpleReact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
