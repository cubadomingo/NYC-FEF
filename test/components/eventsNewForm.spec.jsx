import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsNewForm } from '../../src/components/eventsNewForm';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
  renderLocationField,
} from '../../src/components/eventsFormFields';

describe('EventsNewForm Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<EventsNewForm />);

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={renderTitleField} />,
      <Field name="body" component={renderBodyField} />,
      <div>
        <Field name="datetime" component={renderDateField} />
        <Field name="location" component={renderLocationField} />
      </div>,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <button>Submit</button>,
    )).to.equal(true);
  });

  it('calls submitNewEvent on form submit', () => {
    const submitNewEvent = sinon.spy();
    const wrapper = shallow(<EventsNewForm submitNewEvent={submitNewEvent} />);

    wrapper.simulate('submit');

    expect(submitNewEvent.calledOnce).to.equal(true);
  });
});
