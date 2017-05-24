import React from 'react';
import ScholarshipsEditForm from './scholarshipsEditForm';

const ScholarshipsEdit = props => (
  <div className="container text-center">
    <h1>Edit Scholarship</h1>
    <ScholarshipsEditForm
      onSubmit={(values) => {
        props.scholarshipsEditFormSubmit(values);
      }}
      initialValues={props.initialValues}
    />
  </div>
);

export default ScholarshipsEdit;
