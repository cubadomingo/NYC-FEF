import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { eventsField } from 'utils/formFields';
import { fetchEvent, editEvent } from 'actions';
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

export class EventsEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEvent(id);
  }

  render() {
    const { handleSubmit } = this.props;

    if (this.props.editSuccess) {
      return <Redirect to={`/activities/events/${this.props.editId}`} />;
    }

    return (
      <div className="container text-center">
        <h1>Edit Event</h1>
        <form
          onSubmit={handleSubmit(this.props.editEvent)}
        >
          <Field
            name="title"
            label="Title"
            type="text"
            component={eventsField}
          />
          <Field
            name="description"
            label="description"
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
  }
}

const connectedForm = reduxForm({
  form: 'edit-event',
  validate,
})(EventsEdit);

export default connect(
  mapStateToProps,
  { fetchEvent, editEvent },
)(connectedForm);
