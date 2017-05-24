import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { eventsField } from 'utils/formFields';

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

export const EventsNew = props => (
  <div className="container text-center">
    <h1>Create a New Event</h1>
    <form onSubmit={props.submitNewEvent}>
      <Field
        name="title"
        label="Title"
        type="text"
        component={eventsField}
      />
      <Field
        name="body"
        label="Body"
        type="textarea"
        component={eventsField}
      />
      <div className="form-group row">
        <div className="col-6">
          <Field
            type="datetime-local"
            name="datetime"
            label="Date and Time"
            component={eventsField}
          />
        </div>
        <div className="col-6">
          <Field
            type="location"
            name="location"
            label="Location"
            component={eventsField}
          />
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
);

export default reduxForm({
  form: 'new-event',
  validate,
})(EventsNew);
