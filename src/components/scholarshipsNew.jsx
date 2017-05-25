import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { scholarshipsField } from 'utils/formFields';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'A title is required';
  }
  if (!values.deadline) {
    errors.deadline = 'A deadline is required';
  }
  if (!values.eligibility) {
    errors.eligibility = 'An eligibility requirement is required';
  }
  if (!values.description) {
    errors.description = 'A description is required';
  }
  return errors;
};

export const ScholarshipsNew = props => (
  <div className="container text-center">
    <h1>Create a New Scholarship</h1>
    <form
      onSubmit={(data) => {
        props.submitNewScholarship(data);
      }}
    >
      <Field
        name="title"
        label="Title"
        type="text"
        component={scholarshipsField}
      />
      <Field
        name="description"
        label="Description"
        type="textarea"
        component={scholarshipsField}
      />
      <Field
        name="eligibility"
        label="Eligibility"
        component={scholarshipsField}
      />
      <Field
        type="datetime-local"
        name="deadline"
        label="Deadline"
        component={scholarshipsField}
      />
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
);

export default reduxForm({
  form: 'new-event',
  validate,
})(ScholarshipsNew);
