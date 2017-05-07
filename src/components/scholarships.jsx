import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesNavbar from './activitiesNavbar';
import ScholarshipsIndex from '../containers/scholarshipsIndex';
import ScholarshipsNew from './scholarshipsNew';
import ScholarshipsShow from '../containers/scholarshipsShow';
import ScholarshipsEdit from './scholarshipsEdit';

export default ({ match }) => (
  <div className="text-center">
    <ActivitiesNavbar />
    <Switch>
      <Route exact path={`${match.url}`} component={ScholarshipsIndex} />
      <Route path={`${match.url}/new`} component={ScholarshipsNew} />
      <Route exact path={`${match.url}/:id`} component={ScholarshipsShow} />
      <Route path={`${match.url}/:id/edit`} component={ScholarshipsEdit} />
    </Switch>
  </div>
);
