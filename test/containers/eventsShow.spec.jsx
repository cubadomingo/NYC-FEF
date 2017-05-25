import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import EventsShow from 'containers/eventsShow';

describe('EventsShow Component', () => {
  const event = {
    title: 'Sample Event',
    date: '12/1/18',
    time: '7:00 pm',
    description: 'Lorem Ipsum...',
  };

  it('fetches event on component mount', () => {
    const fetchEvent = sinon.spy();

    mount(<EventsShow match={{ params: 1 }} event={event} fetchEvent={fetchEvent} />);
    expect(fetchEvent.calledOnce).to.equal(true);
  });

  it('renders event title, date, time, and description', () => {
    const wrapper = shallow(<EventsShow match={{ params: 1 }} event={event} />);

    expect(wrapper.containsMatchingElement(
      <div>
        <h1>{event.title}</h1>
        <h3>At {event.location}</h3>
        <h4>{event.date}</h4>
        <h4>{event.time}</h4>
        <p>{event.description}</p>
      </div>,
    )).to.equal(true);
  });
});
