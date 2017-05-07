import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

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

export const renderLocationField = ({
  input,
  label,
  meta: { touched, error },
}) => {
  const className = `row ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className="col-6">
      <div className={className}>
        <label className="col-4" htmlFor={input.name}>{label}</label>
        <div className="col-8">
          <PlacesAutocomplete
            inputProps={{
              value: input.value,
              onChange: input.onChange,
              onBlur: input.onBlur,
              placeholder: 'Enter an address',
            }}
            classNames={{
              input: 'form-control',
            }}
          />
          <div className="form-control-feedback">
            {touched && ((error && <span>{error}</span>))}
          </div>
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
    <div className="col-6">
      <div className={className}>
        <label className="col-4" htmlFor={input.name}>{label}</label>
        <div className="col-8">
          <input {...input} className="form-control" type={type} />
          <div className="form-control-feedback">
            {touched && ((error && <span>{error}</span>))}
          </div>
        </div>
      </div>
    </div>
  );
};
