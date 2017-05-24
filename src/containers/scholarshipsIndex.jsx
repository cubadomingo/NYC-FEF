import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ScholarshipsIndex from 'components/scholarshipsIndex';

export const Scholarships = props => (
  <div>
    <h1>Scholarships</h1>
    { props.authenticated ? (
      <Link to={`${props.match.url}/new`}>Create a New Scholarship</Link>
    ) : (
      null
    )}
    <ScholarshipsIndex />
  </div>
);

const mapStateToProps = state => (
  {
    authenticated: state.authenticate.authenticated,
  }
);

export default connect(mapStateToProps)(Scholarships);
