import React from 'react';
import EventsEditForm from './eventsEditForm';

const EventsEdit = props => (
  <div className="container text-center">
    <h1>EDIT ROUTE</h1>
    <EventsEditForm
      onSubmit={(values) => {
        props.eventsEditFormSubmit(values);
      }}
    />
  </div>
);

export default EventsEdit;
