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
        <h1>{event.title}</h1>
        <h3>At {event.location}</h3>
        <h4>{event.date}</h4>
        <h4>{event.time}</h4>
        <p>{event.description}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchEvent })(EventsShow);
