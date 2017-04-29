import React from 'react';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  const Authentication = props => (
    props.authenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  );

  return Authentication;
};
