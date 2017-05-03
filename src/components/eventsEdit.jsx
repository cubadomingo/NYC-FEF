import React from 'react';
import EventsNewForm from './eventsNewForm';


const EventsEdit = () => {
  const handleSubmit = values => (
    console.log(values)
  );

  return (
    <div className="container text-center">
      <h1>EDIT ROUTE</h1>
      <EventsNewForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EventsEdit;