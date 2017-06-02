import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signInField } from 'utils/formFields';
import { mapStateToProps } from 'reducers/authentication';
import { signIn } from 'actions/index';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'username is required';
  }
  if (!values.password) {
    errors.password = 'password is required';
  }
  return errors;
};

export const SignIn = (props) => {
  const renderAlert = () => {
    if (props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {props.errorMessage}
        </div>
      );
    }
  };

  return (
    props.authenticated ? (
      <Redirect to="/" />
    ) : (
      <div className="container text-center">
        <h1>Sign In</h1>
        <form
          onSubmit={props.handleSubmit(({ username, password }) => {
            props.signIn({ username, password });
          })}
        >
          <Field
            name="username"
            label="Username"
            type="text"
            component={signInField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={signInField}
          />
          <div className="form-group">
            {renderAlert()}
            <button type="submit" className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    )
  );
};

const connectedForm = reduxForm({
  form: 'sign-in',
  validate,
})(SignIn);

export default connect(mapStateToProps, { signIn })(connectedForm);
