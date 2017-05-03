import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesNavbar from './activitiesNavbar';
import EventsIndex from './eventsIndex';
import EventsNew from './eventsNew';
import EventsShow from './eventsShow';
import EventsEdit from './eventsEdit';

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
