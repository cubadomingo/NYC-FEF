import React, { Component } from 'react';

export default class ScholarshipsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchScholarship(id);
  }

  render() {
    const { scholarship } = this.props;
    return (
      <div>
        <h1>{scholarship.title}</h1>
        <h2>{scholarship.deadline}</h2>
        <h3>Eligibility Requirements</h3>
        <p>{scholarship.eligibility}</p>
        <h3>Application Requirements</h3>
        <p>
          {scholarship.description}
        </p>
      </div>
    );
  }
}
