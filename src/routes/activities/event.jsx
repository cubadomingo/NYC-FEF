import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from '../../components/activities/categories/new';
import Index from '../../components/activities/categories/index';
import Show from '../../components/activities/categories/show';
import Edit from '../../components/activities/categories/edit';

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
