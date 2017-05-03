import React from 'react';
import { Route } from 'react-router-dom';
import ActivitiesRoot from './activitiesRoot';
import Events from './events';

const Activities = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={ActivitiesRoot} />
    <Route path={`${match.url}/events`} component={Events} />
  </div>
);

export default Activities;
