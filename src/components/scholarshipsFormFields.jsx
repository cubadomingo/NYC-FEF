import React from 'react';

export const renderTitleField = ({
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

export const renderBodyField = ({
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
        <textarea {...input} className="form-control" type={type} />
        <div className="form-control-feedback">
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    </div>
  );
};

export const renderDateField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const className = `row ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className="col-12">
      <div className={className}>
        <label className="col-2" htmlFor={input.name}>{label}</label>
        <div className="col-3">
          <input {...input} className="form-control" type={type} />
          <div className="form-control-feedback">
            {touched && ((error && <span>{error}</span>))}
          </div>
        </div>
      </div>
    </div>
  );
};
