import React from 'react';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const className = `form-group row ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label className="col-2" htmlFor={input.name}>{label}</label>
      <div className="col-10">
        <input {...input} className="form-control" type={type} />
        <div className="form-control-feedback">
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    </div>
  );
};

export default renderField;
