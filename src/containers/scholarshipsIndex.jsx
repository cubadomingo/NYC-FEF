import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchScholarships } from 'actions/index';
import { mapStateToProps } from 'reducers/scholarships';

export class ScholarshipsIndex extends Component {
  componentDidMount() {
    this.fetchScholarships();
    this.scholarshipsList = this.eventsList.bind(this);
  }

  scholarshipsList() {
    return Object.values(this.props.scholarships).map(scholarship => (
      <div key={scholarship.id}>
        <h4><Link
          to={`${this.props.match.url}/${scholarship.id}`}
        >{scholarship.title}
        </Link></h4>
        <h5>{scholarship.deadline}</h5>
        <h5>{scholarship.eligibility}</h5>
        <p>{scholarship.description}</p>
        {this.props.authenticated ? (
          <div>
            <a
              className="btn btn-secondary"
              onClick={() => { this.props.deleteScholarship(scholarship.id); }}
            >Delete</a>
            <Link
              className="btn btn-secondary"
              to={`${this.props.match.url}/edit/${scholarship.id}`}
            >Edit</Link>
          </div>
        ) : null}
      </div>
    ));
  }

  render() {
    return (
      <div>
        { this.props.deleteSuccess ? (
          <div className="alert alert-success">scholarship deleted</div>
        ) : null }
        <h1>Scholarships</h1>
        { this.props.authenticated ? (
          <Link to={`${this.props.match.url}/new`}>Create a New Scholarship</Link>
        ) : (
          null
        )}
        { this.props.scholarships ? this.scholarshipsList() : <p>There are no scholarships at the moment</p> }
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchScholarships })(ScholarshipsIndex);
