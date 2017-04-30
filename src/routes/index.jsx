import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/home/index';
import About from '../components/about/index';
import Activities from '../containers/activities/index';
import ActivitiesRoutes from '../components/activities/routes';
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
      <Route path="/events" component={ActivitiesRoutes} />
      <Route path="/scholarships" component={ActivitiesRoutes} />
      <Route path="/fundraisers" component={ActivitiesRoutes} />
      <Route path="/initiatives" component={ActivitiesRoutes} />
      <Route path="/login" component={Login} />
      <Subscribe />
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
