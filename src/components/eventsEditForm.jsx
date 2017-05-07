import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
  renderLocationField,
} from './eventsFormFields';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'A title is required';
  }
  if (!values.body) {
    errors.body = 'A body is required';
  }
  if (!values.datetime) {
    errors.datetime = 'A date is required';
  }
  if (!values.location) {
    errors.location = 'A location is required';
  }
  return errors;
};

export const EventsEditForm = props => (
  <form onSubmit={props.submitEditedEvent}>
    <Field
      name="title"
      label="Title"
      type="text"
      component={renderTitleField}
    />
    <Field
      name="body"
      label="Body"
      type="textarea"
      component={renderBodyField}
    />
    <div className="form-group row">
      <Field
        type="datetime-local"
        name="datetime"
        label="Date and Time"
        component={renderDateField}
      />
      <Field
        name="location"
        label="Location"
        component={renderLocationField}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-default">Submit</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'edit-event',
  validate,
})(EventsEditForm);
