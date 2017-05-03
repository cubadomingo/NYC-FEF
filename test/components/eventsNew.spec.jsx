import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import EventsNew from '../../src/components/eventsNew';
import EventsNewForm from '../../src/components/eventsNewForm';

describe(('EventsNew Component'), () => {
  it('contains EventsNewForm Component', () => {
    const wrapper = shallow(<EventsNew />);

    expect(wrapper.exists(EventsNewForm)).to.equal(true);
  });

  it('fires eventNewFormSubmit on submit', () => {
    const eventsNewFormSubmit = sinon.spy();
    const wrapper = shallow(
      <EventsNew eventsNewFormSubmit={eventsNewFormSubmit} />,
    );

    wrapper.find(EventsNewForm).simulate('submit');
    expect(eventsNewFormSubmit.calledOnce).to.equal(true);
  });
});
