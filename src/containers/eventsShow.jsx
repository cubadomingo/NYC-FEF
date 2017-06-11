import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'reducers/events';
import { fetchEvent } from 'actions';

export class EventsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEvent(id);
  }

  render() {
    const { event } = this.props;

    if (!event) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        { this.props.editSuccess ? (
          <div className="alert alert-success">edited successfully!</div>
        ) : null }
        <h1>{event.title}</h1>
        <h3>At {event.location}</h3>
        <h4>{event.datetime}</h4>
        <p>{event.description}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchEvent })(EventsShow);
