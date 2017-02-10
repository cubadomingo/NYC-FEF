import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router';
import NavBar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import LandingPage from '../components/landingPage/landing-page';

export default class Routes extends Component {
  componentDidMount() {
    const html = document.documentElement.style
    html.minHeight = '100%';
    html.position = 'relative';
    html.paddingBottom = '80px';
    html.paddingTop = '56px';
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Match exactly pattern="/" component={LandingPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
