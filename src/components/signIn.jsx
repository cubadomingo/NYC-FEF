import React from 'react';
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
  const handleFormSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    props.authenticated ? (
      <div className="container text-center">
        <h1> You{"'"}re already signed in! </h1>
      </div>
    ) : (
      <div className="container text-center">
        <h1>Sign In</h1>
        <form onSubmit={props.handleSubmit(handleFormSubmit)}>
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
            <button type="submit" className="btn btn-default">Sign In</button>
          </div>
        </form>
      </div>
    )
  );
};

const connectedForm = reduxForm({
  form: 'new-event',
  validate,
})(SignIn);

export default connect(mapStateToProps, { signIn })(connectedForm);
