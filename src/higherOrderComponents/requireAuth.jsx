import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Authentication = (props) => {
  const ComposedComponent = props.composedComponent;

  if (props.authenticated) {
    return <ComposedComponent {...props} />;
  }

  return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
};

export default function requireAuth(composedComponent) {
  const mapStateToProps = ({ authentication }) => ({
    composedComponent,
    authenticated: authentication.authenticated,
  });
  return connect(mapStateToProps)(Authentication);
}
