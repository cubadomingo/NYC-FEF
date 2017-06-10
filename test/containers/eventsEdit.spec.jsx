import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsEdit } from 'containers/eventsEdit';
import { eventsField } from 'utils/formFields';


describe('EventsEdit Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(
      <EventsEdit handleSubmit={() => {}} />,
    );

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={eventsField} />,
      <Field name="description" component={eventsField} />,
      <div>
        <div>
          <Field name="datetime" component={eventsField} />
        </div>
        <div>
          <Field name="location" component={eventsField} />
        </div>
      </div>,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <button>Submit</button>,
    )).to.equal(true);
  });

  it('calls callback on form submit', () => {
    const editEvent = sinon.spy();
    const handleSubmit = fn => (fn);

    const wrapper = shallow(
      <EventsEdit
        editEvent={editEvent}
        handleSubmit={handleSubmit}
      />,
    );

    wrapper.find('form').simulate('submit');

    expect(editEvent.calledOnce).to.equal(true);
  });
});
