import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from '../../components/activities/eventNew';
import Index from '../../components/activities/eventIndex';
import Show from '../../components/activities/eventShow';
import Edit from '../../components/activities/eventEdit';

const EventRoutes = () => (
  <Switch>
    <Route
      exact
      path="/activities/events/"
      component={Index}
    />
    <Route
      path="/activities/events/new"
      component={New}
    />
    <Route
      exact
      path="/activities/events/:id"
      component={Show}
    />
    <Route
      path="/activities/events/:id/edit"
      component={Edit}
    />
  </Switch>
);

export default EventRoutes;
