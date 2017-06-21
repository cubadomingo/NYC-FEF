import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesNavbar from 'components/activitiesNavbar';
import ScholarshipsIndex from 'containers/scholarshipsIndex';
import ScholarshipsNew from 'components/scholarshipsNew';
import ScholarshipsShow from 'containers/scholarshipsShow';
import ScholarshipsEdit from 'containers/scholarshipsEdit';

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
