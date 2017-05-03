import React from 'react';
import { Link } from 'react-router-dom';

const EventsIndex = ({ match }) => (
  <div>
    <p>INDEX ROUTE</p>
    <Link to={`${match.url}/new`}>New</Link>
  </div>
);

export default EventsIndex;
