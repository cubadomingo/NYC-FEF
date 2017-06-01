import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { EventsIndex } from 'containers/eventsIndex';

describe('EventsIndex Container', function () {
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

  it('fetches events on component mount', function () {
    const fetchEvents = sinon.spy();

    mount(
      <MemoryRouter>
        <EventsIndex
          fetchEvents={fetchEvents}
          match={{ url: '/activities' }}
        />
      </MemoryRouter>,
    );

    expect(fetchEvents.calledOnce).to.equal(true);
  });

  it('contains no Link if not logged in', function () {
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

  it('renders message if there are no events', function () {
    const wrapper = shallow(
      <EventsIndex
        match={{ url: '/activites/events' }}
      />,
    );

    expect(wrapper.contains(
      <p>There are no events at the moment</p>,
    )).to.equal(true);
  });

  it('renders events', function () {
    const events = {
      1: {
        id: 1,
        title: 'sample',
        description: 'lorem',
        datetime: 'sometime',
        location: 'somewhere',
      },
      2: {
        id: 2,
        title: 'sample',
        description: 'lorem',
        datetime: 'sometime',
        location: 'somewhere',
      },
    };

    const wrapper = shallow(
      <EventsIndex
        match={{ url: '/activities/events' }}
        events={events}
      />,
    );

    expect(wrapper.find('Link')).to.have.length(2);
    expect(wrapper.find({
      to: '/activities/events/1',
    }).exists()).to.equal(true);
    expect(wrapper.find({
      to: '/activities/events/2',
    }).exists()).to.equal(true);
    expect(wrapper.contains([
      <h5>{events[1].location}</h5>,
      <h5>{events[1].datetime}</h5>,
      <p>{events[1].description}</p>,
    ])).to.equal(true);
    expect(wrapper.contains([
      <h5>{events[2].location}</h5>,
      <h5>{events[2].datetime}</h5>,
      <p>{events[2].description}</p>,
    ])).to.equal(true);
  });
});
