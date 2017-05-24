import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
} from 'components/scholarshipsFormFields';

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

export const ScholarshipsNewForm = props => (
  <form onSubmit={props.submitNewScholarship}>
    <Field
      name="title"
      label="Title"
      type="text"
      component={renderTitleField}
    />
    <Field
      name="description"
      label="Description"
      type="textarea"
      component={renderBodyField}
    />
    <Field
      name="eligibility"
      label="Eligibility"
      component={renderBodyField}
    />
    <div className="form-group row text-center">
      <Field
        type="datetime-local"
        name="deadline"
        label="Deadline"
        component={renderDateField}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-default">Submit</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'new-event',
  validate,
})(ScholarshipsNewForm);
