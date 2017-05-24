import React from 'react';
import EventsEditForm from 'components/eventsEditForm';

const EventsEdit = props => (
  <div className="container text-center">
    <h1>Edit Event</h1>
    <EventsEditForm
      onSubmit={(values) => {
        props.eventsEditFormSubmit(values);
      }}
      initialValues={props.initialValues}
    />
  </div>
);

export default EventsEdit;
