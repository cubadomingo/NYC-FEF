import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EventsIndex from 'components/eventsIndex';

export const Events = props => (
  <div>
    <h1>Events</h1>
    { props.authenticated ? (
      <Link to={`${props.match.url}/new`}>Create a New Event</Link>
    ) : (
      null
    )}
    <EventsIndex />
  </div>
);

const mapStateToProps = state => (
  {
    authenticated: state.authenticate.authenticated,
  }
);

export default connect(mapStateToProps)(Events);
