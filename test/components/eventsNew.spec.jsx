import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsNew } from 'components/eventsNew';
import { eventsField } from 'utils/formFields';

describe('EventsNew Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<EventsNew />);

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
    const submitNewEvent = sinon.spy();
    const wrapper = shallow(<EventsNew submitNewEvent={submitNewEvent} />);

    wrapper.find('form').simulate('submit');

    expect(submitNewEvent.calledOnce).to.equal(true);
  });
});
