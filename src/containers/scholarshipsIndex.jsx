import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ScholarshipsIndexList from '../components/scholarshipsIndexList';

export const ScholarshipsIndex = props => (
  <div>
    <h1>Events</h1>
    { props.authenticated ? (
      <Link to={`${props.match.url}/new`}>Create a New Scholarship</Link>
    ) : (
      null
    )}
    <ScholarshipsIndexList />
  </div>
);

const mapStateToProps = state => (
  {
    authenticated: state.authenticate.authenticated,
  }
);

export default connect(mapStateToProps)(ScholarshipsIndex);
