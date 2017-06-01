import React from 'react';
import { Route } from 'react-router-dom';
import ActivitiesRoot from 'containers/activitiesRoot';
import Events from 'components/events';
import Scholarships from 'components/scholarships';

const Activities = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={ActivitiesRoot} />
    <Route path={`${match.url}/events`} component={Events} />
    <Route path={`${match.url}/scholarships`} component={Scholarships} />
  </div>
);

export default Activities;
