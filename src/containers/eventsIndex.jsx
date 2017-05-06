import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EventsIndexList from '../components/eventsIndexList';

const EventsIndex = props => (
  <div>
    <h1>Events</h1>
    { console.log(props)}
    { props.authenticated ? (
      <Link to={`${props.match.url}/new`}>Create a New Event</Link>
    ) : (
      null
    )}
    <EventsIndexList />
  </div>
);

const mapStateToProps = state => (
  {
    authenticated: state.authenticate.authenticated,
  }
);

export default connect(mapStateToProps)(EventsIndex);
