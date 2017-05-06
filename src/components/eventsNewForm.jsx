import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PlacesAutocomplete from 'react-places-autocomplete';

const wrappedComponent = props => (
  <PlacesAutocomplete
    inputProps={{
      value: props.input.value,
      onChange: props.input.onChange,
      placeholder: 'Enter an address',
    }}
    classNames={{
      input: 'form-control',
    }}
  />
);

const EventsNewForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="form-group row">
      <label className="col-2" htmlFor="title">Title</label>
      <div className="col-10">
        <Field className="form-control" name="title" component="input" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2" htmlFor="body">Body</label>
      <div className="col-sm-10">
        <Field className="form-control" name="body" component="textarea" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-6">
        <div className="row">
          <label className="col-4" htmlFor="date">Date</label>
          <div className="col-8">
            <Field className="form-control" name="time-and-date" component="input" type="datetime-local" />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <label className="col-4" htmlFor="location">Location</label>
          <div className="col-8">
            <Field
              name="location"
              component={wrappedComponent}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-default">Submit</button>
    </div>
  </form>
);

export default reduxForm({ form: 'new-event' })(EventsNewForm);
