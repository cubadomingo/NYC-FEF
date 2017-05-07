import React from 'react';
import ScholarshipsNewForm from './scholarshipsNewForm';

export default (props) => {
  const handleSubmit = (values) => {
    props.scholarshipsNewFormSubmit(values);
  };

  return (
    <div className="container text-center">
      <h1>Create a New Scholarship</h1>
      <ScholarshipsNewForm onSubmit={handleSubmit} />
    </div>
  );
};
