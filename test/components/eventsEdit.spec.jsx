import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import EventsEdit from '../../src/components/eventsEdit';
import EventsEditForm from '../../src/components/eventsEditForm';

describe(('EventsEdit Component'), () => {
  it('contains EventsEditForm Component', () => {
    const wrapper = shallow(<EventsEdit />);

    expect(wrapper.exists(EventsEditForm)).to.equal(true);
  });

  it('fires eventEditFormSubmit on submit', () => {
    const eventsEditFormSubmit = sinon.spy();
    const wrapper = shallow(
      <EventsEdit eventsEditFormSubmit={eventsEditFormSubmit} />,
    );

    wrapper.find(EventsEditForm).simulate('submit');
    expect(eventsEditFormSubmit.calledOnce).to.equal(true);
  });
});
