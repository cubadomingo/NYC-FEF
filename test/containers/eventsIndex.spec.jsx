import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router-dom';
import { EventsIndex } from '../../src/containers/eventsIndex';
import EventsIndexList from '../../src/components/eventsIndexList';

describe('EventsIndex Container', () => {
  it('contains EventsIndexList Component', () => {
    const wrapper = shallow(
      <EventsIndex match={{ url: '/activities/events' }} />,
    );

    expect(wrapper.find(EventsIndexList).exists()).to.equal(true);
  });

  it('contains Link to create a new event if logged in', () => {
    const wrapper = shallow(
      <EventsIndex
        authenticated
        match={{ url: '/activities/events' }}
      />,
    );

    expect(wrapper.containsMatchingElement(
      <Link to="/activities/events/new">Create a New Event</Link>,
    )).to.equal(true);
  });

  it('contains no Link if not logged in', () => {
    const wrapper = shallow(
      <EventsIndex
        authenticated={false}
        match={{ url: '/activities/events' }}
      />,
    );

    expect(wrapper.containsMatchingElement(
      <Link to="/activities/events/new">Create a New Event</Link>,
    )).to.equal(false);
  });
});
