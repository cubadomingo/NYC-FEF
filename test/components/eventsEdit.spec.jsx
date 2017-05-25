import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsEdit } from 'components/eventsEdit';
import { eventsField } from 'utils/formFields';

describe('EventsEdit Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<EventsEdit />);

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={eventsField} />,
      <Field name="body" component={eventsField} />,
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
    const submitEditedEvent = sinon.spy();
    const wrapper = shallow(
      <EventsEdit submitEditedEvent={submitEditedEvent} />,
    );

    wrapper.find('form').simulate('submit');

    expect(submitEditedEvent.calledOnce).to.equal(true);
  });
});
