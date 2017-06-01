import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from 'actions';
import { mapStateToProps } from 'reducers/events';

export class EventsIndex extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.eventsList = this.eventsList.bind(this);
  }

  eventsList() {
    return this.props.events.map(event => (
      <div key={event.id}>
        <h4>{event.title}</h4>
        <h5>{event.location}</h5>
        <h5>{event.datetime}</h5>
        <p>{event.description}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Events</h1>
        { this.props.authenticated ? (
          <Link to={`${this.props.match.url}/new`}>Create a New Event</Link>
        ) : (
          null
        )}
        { this.props.events ? this.eventsList() : <p>There are no events at the moment</p> }
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchEvents })(EventsIndex);
