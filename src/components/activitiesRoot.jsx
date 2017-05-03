import React from 'react';
import { Link } from 'react-router-dom';

export default ({ match }) => (
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
);
