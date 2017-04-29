import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { mapStateToProps } from '../reducers/authentication';

export const Authentication = (props) => {
  const ComposedComponent = props.composedComponent;

  if (props.authenticated) {
    return <ComposedComponent {...props} />;
  }

  return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
};

export default function requireAuth(composedComponent) {
  return connect(mapStateToProps(composedComponent))(Authentication);
}
