import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../reducers/authentication';
import {
  signIn,
  signOut,
} from '../../actions/index';

export const Login = props => (
  !props.authenticated ? (
    <button id="signin" onClick={() => props.signIn()}>
      Sign In
    </button>
  ) : (
    <button id="signout" onClick={() => props.signOut()}>
      Sign Out
    </button>
  )
);

export default connect(mapStateToProps, { signIn, signOut })(Login);
