import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { EventsNew } from 'components/eventsNew';
import { eventsField } from 'utils/formFields';

describe('EventsNew Component', () => {
  it('renders 4 fields and a submit button', function () {
    const wrapper = shallow(<EventsNew handleSubmit={() => {}} />);

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

  it('calls callback on form submit', function () {
    const submitNewEvent = sinon.spy();
    const handleSubmit = fn => (fn);

    const wrapper = shallow(
      <EventsNew
        submitNewEvent={submitNewEvent}
        handleSubmit={handleSubmit}
      />,
    );

    wrapper.find('form').simulate('submit');

    expect(submitNewEvent.calledOnce).to.equal(true);
  });

  it('should redirect on succesful submit', function () {
    const wrapper = shallow(
      <EventsNew
        submitSuccess
        newPostId={1}
      />,
    );

    expect(wrapper.find('Redirect').exists()).to.equal(true);
    expect(wrapper.find({ to: '/activities/events/1' }).exists()).to.equal(true);
  });
});
