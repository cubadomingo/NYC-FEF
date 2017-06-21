import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { mapStateToProps } from 'reducers/scholarships';
import {
  fetchScholarship,
  deleteScholarship,
} from 'actions/index';

export class ScholarshipsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchScholarship(id);
  }

  render() {
    const { scholarship } = this.props;

    if (this.props.deleteSuccess) {
      return <Redirect to={'/activities/scholarships'} />;
    }

    return (
      <div>
        { this.props.editSuccess ? (
          <div className="alert alert-success">edited successfully!</div>
        ) : null }
        <h1>{scholarship.title}</h1>
        <h2>{scholarship.deadline}</h2>
        <h3>Eligibility Requirements</h3>
        <p>{scholarship.eligibility}</p>
        <h3>Application Requirements</h3>
        <p>
          {scholarship.description}
        </p>
        { this.props.authenticated ? (
          <div>
            <a
              className="btn btn-secondary"
              onClick={() => { this.props.deleteScholarship(scholarship.id); }}
            >Delete</a>
            <Link
              className="btn btn-secondary"
              to={`/activities/scholarships/edit/${scholarship.id}`}
            >Edit</Link>
          </div>
        ) : null }
      </div>
    );
  }
}

export default connect(
  mapStateToProps, { fetchScholarship, deleteScholarship },
)(ScholarshipsShow);
