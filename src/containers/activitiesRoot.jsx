import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLatestEvent } from 'actions';
import { mapStateToProps } from 'reducers/events';

export class ActivitiesRoot extends Component {
  componentDidMount() {
    this.props.fetchLatestEvent();
    this.renderEvent = this.renderEvent.bind(this);
  }

  renderEvent() {
    return (
      <div>
        <h4>
          <Link
            to={`${this.props.match.url}/events/${this.props.latestEvent.id}`}
          >{this.props.latestEvent.title}
          </Link>
        </h4>
        <h5>{this.props.latestEvent.location}</h5>
        <h5>{this.props.latestEvent.datetime}</h5>
        <p>{this.props.latestEvent.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>
              <Link to={`${this.props.match.url}/events`}>Events</Link>
            </h1>
            <p>Latest Event:</p>
            { this.props.latestEvent ? this.renderEvent() : <p>There are no events at the moment</p> }
          </div>
          <div className="col">
            <h1>
              <Link
                to={`${this.props.match.url}/scholarships`}
              >Scholarships
              </Link>
            </h1>
            <p>Latest Scholarship:</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>
              <Link
                to={`${this.props.match.url}/fundraisers`}
              >Fundraisers
              </Link>
            </h1>
            <p>Latest Fundraiser:</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchLatestEvent })(ActivitiesRoot);
