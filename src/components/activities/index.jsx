import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ActivitiesNavbar from '../layout/activitiesNavbar';
import EventIndex from './eventIndex';

const Activities = ({ match }) => (
  <div>
    <ActivitiesNavbar />
    <Route
      exact
      path={`${match.url}/events`}
      component={EventIndex}
    />
  </div>
);

export default Activities;
