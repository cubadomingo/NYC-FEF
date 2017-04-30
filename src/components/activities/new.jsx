import React from 'react';
import EventsNewForm from './forms/eventsNewForm';
import InitiativesNewForm from './forms/initiativesNewForm';
import ScholarshipsNewForm from './forms/scholarshipsNewForm';
import FundraisersNewForm from './forms/fundraisersNewForm';

const ActivityNew = (props) => {
  const handleSubmit = (values) => {
    switch (props.name) {
      case 'events':
        return props.submitNewEvent(values);
      case 'initiatives':
        return props.submitNewInitiative(values);
      case 'scholarships':
        return props.submitNewScholarships(values);
      case 'fundraisers':
        return props.submitNewFundraisers(values);
      default:
        return null;
    }
  };

  const newForm = (activity) => {
    switch (activity) {
      case 'events':
        return <EventsNewForm onSubmit={handleSubmit} />;
      case 'initiatives':
        return <InitiativesNewForm onSubmit={handleSubmit} />;
      case 'scholarships':
        return <ScholarshipsNewForm onSubmit={handleSubmit} />;
      case 'fundraisers':
        return <FundraisersNewForm onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="container text-center">
      <h1>New {props.name}</h1>
      { newForm(props.name) }
    </div>
  );
};

export default ActivityNew;
