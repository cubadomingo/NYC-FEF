import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import LandingPage from '../components/landingPage/landing-page';
import GetInvolved from '../components/getInvolved/get-involved';
import Activities from '../components/activities/activities';

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={LandingPage} />
    <Route path="/get-involved" component={GetInvolved} />
    <Route path="/activities" component={Activities} />
    <Footer />
  </div>
);

export default class Routes extends Component {
  componentDidMount() {
    const html = document.documentElement.style
    html.minHeight = '100%';
    html.position = 'relative';
    html.paddingBottom = '160px';
    html.paddingTop = '80px';
  }
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
