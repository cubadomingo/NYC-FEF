import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesNavbar from 'components/activitiesNavbar';
import EventsIndex from 'containers/eventsIndex';
import EventsNew from 'components/eventsNew';
import EventsShow from 'containers/eventsShow';
import EventsEdit from 'components/eventsEdit';

const Events = ({ match }) => (
  <div className="text-center">
    <ActivitiesNavbar />
    <Switch>
      <Route exact path={`${match.url}`} component={EventsIndex} />
      <Route path={`${match.url}/new`} component={EventsNew} />
      <Route exact path={`${match.url}/:id`} component={EventsShow} />
      <Route path={`${match.url}/:id/edit`} component={EventsEdit} />
    </Switch>
  </div>
);

export default Events;
