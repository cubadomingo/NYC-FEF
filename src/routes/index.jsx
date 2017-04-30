import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/home/index';
import About from '../components/about/index';
import Activities from '../components/activities/index';
import EventRoutes from './activities/event';
import FundraiserRoutes from './activities/fundraiser';
import InitiativeRoutes from './activities/initiative';
import ScholarshipRoutes from './activities/scholarship';
import Login from '../components/authentication/login';
import Navbar from '../components/layout/navbar';
import Subscribe from '../components/layout/subscribe';
import Footer from '../components/layout/footer';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <EventRoutes />
      <FundraiserRoutes />
      <ScholarshipRoutes />
      <InitiativeRoutes />
      <Route path="/login" component={Login} />
      <Subscribe />
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
