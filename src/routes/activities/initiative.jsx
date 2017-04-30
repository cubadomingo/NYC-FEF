import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from '../../components/activities/categories/new';
import Index from '../../components/activities/categories/index';
import Show from '../../components/activities/categories/show';
import Edit from '../../components/activities/categories/edit';

const InitiativeRoutes = () => (
  <Switch>
    <Route
      exact
      path="/activities/initiatives/"
      component={Index}
    />
    <Route
      path="/activities/initiatives/new"
      component={New}
    />
    <Route
      exact
      path="/activities/initiatives/:id"
      component={Show}
    />
    <Route
      path="/activities/initiatives/:id/edit"
      component={Edit}
    />
  </Switch>
);

export default InitiativeRoutes;
