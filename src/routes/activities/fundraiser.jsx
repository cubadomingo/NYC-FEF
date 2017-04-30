import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from '../../components/activities/categories/new';
import Index from '../../components/activities/categories/index';
import Show from '../../components/activities/categories/show';
import Edit from '../../components/activities/categories/edit';

const FundraiserRoutes = () => (
  <Switch>
    <Route
      exact
      path="/activities/fundraisers/"
      component={Index}
    />
    <Route
      path="/activities/fundraisers/new"
      component={New}
    />
    <Route
      exact
      path="/activities/fundraisers/:id"
      component={Show}
    />
    <Route
      path="/activities/fundraisers/:id/edit"
      component={Edit}
    />
  </Switch>
);

export default FundraiserRoutes;
