import React from 'react';
import { Field, reduxForm } from 'redux-form';

const InitiativesNewForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="title">Title</label>
      <Field className="form-control" name="title" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="body">Body</label>
      <Field className="form-control" name="body" component="textarea" type="text" />
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
);

export default reduxForm({ form: 'new-activity' })(InitiativesNewForm);
