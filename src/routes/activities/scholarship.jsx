import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from '../../components/activities/categories/new';
import Index from '../../components/activities/categories/index';
import Show from '../../components/activities/categories/show';
import Edit from '../../components/activities/categories/edit';

const ScholarshipRoutes = () => (
  <Switch>
    <Route
      exact
      path="/activities/scholarships/"
      component={Index}
    />
    <Route
      path="/activities/scholarships/new"
      component={New}
    />
    <Route
      exact
      path="/activities/scholarships/:id"
      component={Show}
    />
    <Route
      path="/activities/scholarships/:id/edit"
      component={Edit}
    />
  </Switch>
);

export default ScholarshipRoutes;
