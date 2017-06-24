import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLatestEvent, fetchLatestScholarship } from 'actions';

export class ActivitiesRoot extends Component {
  componentDidMount() {
    this.props.fetchLatestEvent();
    this.props.fetchLatestScholarship();
    this.renderEvent = this.renderEvent.bind(this);
    this.renderScholarship = this.renderScholarship.bind(this);
  }

  renderScholarship() {
    const { url } = this.props.match;
    const {
      id,
      title,
      deadline,
      description,
      eligibility,
    } = this.props.latestScholarship;
    return (
      <div>
        <h4>
          <Link to={`${url}/scholarships/${id}`}>{title}</Link>
        </h4>
        <h5>{deadline}</h5>
        <h5>{eligibility}</h5>
        <p>{description}</p>
      </div>
    );
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
            { this.props.latestScholarship ? this.renderScholarship() : <p>There are no scholarships at the moment</p> }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ events, scholarships }) => (
  {
    latestEvent: events.latestEvent,
    latestScholarship: scholarships.latestScholarship,
  }
);

export default connect(mapStateToProps, {
  fetchLatestEvent,
  fetchLatestScholarship,
})(ActivitiesRoot);
