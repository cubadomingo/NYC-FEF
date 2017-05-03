import React from 'react';
import { Link } from 'react-router-dom';
import EventsIndexList from '../components/eventsIndexList';

const EventsIndex = props => (
  <div>
    <h1>Events</h1>
    { props.authenticated ? (
      <Link to={`${props.match.url}/new`}>Create a New Event</Link>
    ) : (
      null
    )}
    <EventsIndexList />
  </div>
);

export default EventsIndex;
