import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/home';
import About from '../components/about';
import Activities from '../components/activities';
import Login from '../components/login';
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <Route path="/login" component={Login} />
      <Subscribe />
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
