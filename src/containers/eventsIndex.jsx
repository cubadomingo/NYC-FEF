import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents, deleteEvent } from 'actions';
import { mapStateToProps } from 'reducers/events';

export class EventsIndex extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.eventsList = this.eventsList.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  eventsList() {
    return Object.values(this.props.events).map(event => (
      <div key={event.id}>
        <h4><Link
          to={`${this.props.match.url}/${event.id}`}
        >{event.title}
        </Link></h4>
        <h5>{event.location}</h5>
        <h5>{event.datetime}</h5>
        <p>{event.description}</p>
        {this.props.authenticated ? (
          <div>
            <a
              className="btn btn-secondary"
              onClick={() => { this.props.deleteEvent(event.id); }}
            >Delete</a>
            <Link
              className="btn btn-secondary"
              to={`${this.props.match.url}/edit/${event.id}`}
            >Edit</Link>
          </div>
        ) : null}

      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        { this.props.deleteSuccess ? <div className="alert alert-success">event deleted</div> : null }
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

export default connect(
  mapStateToProps,
  { fetchEvents, deleteEvent },
)(EventsIndex);
