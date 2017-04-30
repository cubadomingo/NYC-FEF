import React from 'react';
import EventsNewForm from './forms/eventsNewForm';
import InitiativesNewForm from './forms/initiativesNewForm';
import ScholarshipsNewForm from './forms/scholarshipsNewForm';
import FundraisersNewForm from './forms/fundraisersNewForm';

const New = (props) => {
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
      case 'Events':
        return <EventsNewForm onSubmit={handleSubmit} />;
      case 'Initiatives':
        return <InitiativesNewForm onSubmit={handleSubmit} />;
      case 'Scholarships':
        return <ScholarshipsNewForm onSubmit={handleSubmit} />;
      case 'Fundraisers':
        return <FundraisersNewForm onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  console.log(props);
  return (
    <div className="container text-center">
      <h1>NEW ROUTE</h1>
      { newForm(props.name) }
    </div>
  );
};

export default New;
