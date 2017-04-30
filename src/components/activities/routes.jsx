import React from 'react';
import { Switch, Route } from 'react-router-dom';
import New from './new';
import Index from './index';

const ActivitiesRoutes = ({ match }) => {
  const name = match.url.replace(/\W/, '');

  return (
    <div>
      <Switch>
        <Route
          path={`${match.url}/new`}
          render={() =>
            <New name={name} />
          }
        />
        <Route
          exact
          path={match.url}
          render={() =>
            <Index name={name} match={match} />
          }
        />
      </Switch>
    </div>
  );
};

export default ActivitiesRoutes;
