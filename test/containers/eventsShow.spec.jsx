import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { EventsShow } from 'containers/eventsShow';

describe('EventsShow Component', () => {
  const event = {
    id: 1,
    title: 'Sample Event',
    datetime: 'sometime',
    description: 'Lorem Ipsum...',
    location: 'somewhere',
  };

  it('fetches event on component mount', () => {
    const fetchEvent = sinon.spy();

    mount(<EventsShow match={{ params: 1 }} event={event} fetchEvent={fetchEvent} />);
    expect(fetchEvent.calledOnce).to.equal(true);
  });

  it('renders event title, date, time, and description', () => {
    const wrapper = shallow(
      <EventsShow match={{ params: event.id }} event={event} />,
    );

    expect(wrapper.contains([
      <h1>{event.title}</h1>,
      <h3>At {event.location}</h3>,
      <h4>{event.datetime}</h4>,
      <p>{event.description}</p>,
    ])).to.equal(true);
  });

  it('renders success message on editSuccess', () => {
    const wrapper = shallow(
      <EventsShow
        editSuccess
        match={{ params: event.id }}
        event={event}
      />,
    );

    expect(
      wrapper.containsMatchingElement(<div>edited successfully!</div>),
    ).to.equal(true);
  });

  it('renders no message if editSuccess is false', () => {
    const wrapper = shallow(
      <EventsShow
        match={{ params: event.id }}
        event={event}
      />,
    );

    expect(
      wrapper.containsMatchingElement(<div>edited successfully!</div>),
    ).to.equal(false);
  });
});
