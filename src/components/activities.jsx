import React from 'react';
import { Route, Link } from 'react-router-dom';
import Events from './events';

const Activities = ({ match }) => (
  <div>
    <Route
      exact
      path={`${match.url}`}
      render={() => (
        <div className="container text-center">
          <h1>
            <Link to={`${match.url}/events`}>Events</Link>
          </h1>
          <h1>
            <Link to={`${match.url}/scholarships`}>Scholarships</Link>
          </h1>
          <h1>
            <Link to={`${match.url}/initiatives`}>Initiatives</Link>
          </h1>
          <h1>
            <Link to={`${match.url}/fundraisers`}>Fundraisers</Link>
          </h1>
        </div>
      )}
    />
    <Route path={`${match.url}/events`} component={Events} />
  </div>
);

export default Activities;
