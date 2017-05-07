import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsEditForm } from '../../src/components/eventsEditForm';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
  renderLocationField,
} from '../../src/components/eventsFormFields';

describe('EventsNewForm Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<EventsEditForm />);

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
    const submitEditedEvent = sinon.spy();
    const wrapper = shallow(
      <EventsEditForm submitEditedEvent={submitEditedEvent} />,
    );

    wrapper.simulate('submit');

    expect(submitEditedEvent.calledOnce).to.equal(true);
  });
});
