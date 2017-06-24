import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesNavbar from 'components/activitiesNavbar';
import EventsIndex from 'containers/eventsIndex';
import EventsNew from 'components/eventsNew';
import EventsShow from 'containers/eventsShow';
import EventsEdit from 'containers/eventsEdit';
import requireAuth from 'higherOrderComponents/requireAuth';

const Events = ({ match }) => (
  <div className="text-center">
    <ActivitiesNavbar />
    <Switch>
      <Route exact path={`${match.url}`} component={EventsIndex} />
      <Route
        path={`${match.url}/new`}
        component={requireAuth(EventsNew)}
      />
      <Route exact path={`${match.url}/:id`} component={EventsShow} />
      <Route
        path={`${match.url}/edit/:id`}
        component={requireAuth(EventsEdit)}
      />
    </Switch>
  </div>
);

export default Events;
