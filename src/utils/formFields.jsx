import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export const eventsField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const className = `form-group row ${touched && error ? 'has-danger' : ''}`;

  const labelClass = (
    type === 'datetime-local' || type === 'location'
  ) ? 'col-4' : 'col-2';

  const inputClass = (
    type === 'datetime-local' || type === 'location'
  ) ? 'col-8' : 'col-10';

  const inputSelect = () => {
    switch (type) {
      case 'textarea':
        return <textarea {...input} className="form-control" type={type} />;
      case 'location':
        return (
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
        );
      default:
        return <input {...input} className="form-control" type={type} />;
    }
  };

  return (
    <div className={className}>
      <label className={labelClass} htmlFor={input.name}>{label}</label>
      <div className={inputClass}>
        { inputSelect() }
        <div className="form-control-feedback">
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    </div>
  );
};

export const scholarshipsField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const className = `form-group row ${touched && error ? 'has-danger' : ''}`;

  const inputClass = (type === 'datetime-local') ? 'col-4' : 'col-10';

  const inputSelect = () => {
    switch (type) {
      case 'textarea':
        return <textarea {...input} className="form-control" type={type} />;
      default:
        return <input {...input} className="form-control" type={type} />;
    }
  };

  return (
    <div className={className}>
      <label className="col-2" htmlFor={input.name}>{label}</label>
      <div className={inputClass}>
        {inputSelect()}
        <div className="form-control-feedback">
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    </div>
  );
};

export const signInField = ({
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
