import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { eventsField } from 'utils/formFields';
import { submitNewEvent } from 'actions';
import { mapStateToProps } from 'reducers/events';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'A title is required';
  }
  if (!values.description) {
    errors.description = 'A body is required';
  }
  if (!values.datetime) {
    errors.datetime = 'A date is required';
  }
  if (!values.location) {
    errors.location = 'A location is required';
  }
  return errors;
};

export const EventsNew = (props) => {
  const { handleSubmit } = props;

  if (props.submitSuccess) {
    return <Redirect to={`/activities/events/${props.newPostId}`} />;
  }

  return (
    <div className="container text-center">
      <h1>Create a New Event</h1>
      <form
        onSubmit={handleSubmit(props.submitNewEvent)}
      >
        <Field
          name="title"
          label="Title"
          type="text"
          component={eventsField}
        />
        <Field
          name="description"
          label="Description"
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
};

const connectedForm = reduxForm({
  form: 'new-event',
  validate,
})(EventsNew);

export default connect(mapStateToProps, { submitNewEvent })(connectedForm);
