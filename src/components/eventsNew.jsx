import React from 'react';
import EventsNewForm from './eventsNewForm';

const EventsNew = (props) => {
  const handleSubmit = (values) => {
    props.eventsNewFormSubmit(values);
  };

  return (
    <div className="container text-center">
      <h1>Create a New Event</h1>
      <EventsNewForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EventsNew;
