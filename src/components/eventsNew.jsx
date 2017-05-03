import React from 'react';
import EventsNewForm from './eventsNewForm';

const EventsNew = () => {
  const handleSubmit = values => (
    console.log(values)
  );

  return (
    <div className="container text-center">
      <h1>NEW ROUTE</h1>
      <EventsNewForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EventsNew;
