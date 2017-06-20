import React from 'react';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ActivitiesRoot } from 'containers/ActivitiesRoot';

describe('ActivitiesRoot', function () {
  it('renders Links', function () {
    const wrapper = shallow(<ActivitiesRoot match={{ url: '/activities' }} />);
    expect(wrapper.find('Link')).to.have.length(3);
    expect(wrapper.find({
      to: '/activities/events',
    }).exists()).to.equal(true);
    expect(wrapper.find({
      to: '/activities/scholarships',
    }).exists()).to.equal(true);
    expect(wrapper.find({
      to: '/activities/fundraisers',
    }).exists()).to.equal(true);
  });

  it('fetches event and scholarship on component mount', function () {
    const fetchLatestEvent = sinon.spy();
    const fetchLatestScholarship = sinon.spy();

    mount(
      <MemoryRouter>
        <ActivitiesRoot
          fetchLatestScholarship={fetchLatestScholarship}
          fetchLatestEvent={fetchLatestEvent}
          match={{ url: '/activities' }}
        />
      </MemoryRouter>,
    );

    expect(fetchLatestEvent.calledOnce).to.equal(true);
    expect(fetchLatestScholarship.calledOnce).to.equal(true);
  });

  it('renders a message if there are no events', function () {
    const wrapper = shallow(<ActivitiesRoot match={{ url: '/activities' }} />);

    expect(wrapper.contains(
      <p>There are no events at the moment</p>,
    )).to.equal(true);
  });

  it('renders the latest event', function () {
    const latestEvent = {
      id: 1,
      title: 'sample',
      description: 'lorem ipsum',
      datetime: 'time..',
      location: 'somewhere',
    };

    const wrapper = shallow(
      <ActivitiesRoot
        match={{ url: '/activities' }}
        latestEvent={latestEvent}
      />,
    );

    expect(wrapper.contains(
      <p>There are no events at the moment</p>,
    )).to.equal(false);

    expect(wrapper.contains([
      <h5>{latestEvent.location}</h5>,
      <h5>{latestEvent.datetime}</h5>,
      <p>{latestEvent.description}</p>,
    ])).to.equal(true);
  });

  it('renders a message if there are no scholarships', function () {
    const wrapper = shallow(<ActivitiesRoot match={{ url: '/activities' }} />);

    expect(wrapper.contains(
      <p>There are no scholarships at the moment</p>,
    )).to.equal(true);
  });

  it('renders the latest scholarship', function () {
    const latestScholarship = {
      id: 1,
      title: 'Sample Scholarship',
      deadline: 'time',
      description: 'lorem ipsum',
      eligibility: 'sophomore',
    };

    const wrapper = shallow(
      <ActivitiesRoot
        match={{ url: '/activities' }}
        latestScholarship={latestScholarship}
      />,
    );

    expect(wrapper.find({ to: '/activities/scholarships/1' }).exists()).to.equal(true);

    expect(wrapper.contains(
      <p>There are no scholarships at the moment</p>,
    )).to.equal(false);

    expect(wrapper.contains(
      <h5>{latestScholarship.deadline}</h5>,
      <h5>{latestScholarship.eligibility}</h5>,
      <p>{latestScholarship.description}</p>,
    ));
  });
});
