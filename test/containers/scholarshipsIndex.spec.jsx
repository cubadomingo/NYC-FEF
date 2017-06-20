import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router-dom';
import { ScholarshipsIndex } from 'containers/scholarshipsIndex';

describe('ScholarshipsIndex Container', function () {
  const scholarships = {
    1: {
      id: 1,
      title: 'sample',
      description: 'lorem ipsum',
      eligibility: 'sophomore',
    },
    2: {
      id: 2,
      title: 'sample 2',
      description: 'lorem ipsum',
      deadline: 'some time',
      eligibility: 'freshman',
    },
  };

  it('contains Link to create a new scholarship if logged in', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        authenticated
        match={{ url: '/activities/scholarships' }}
      />,
    );

    expect(wrapper.containsMatchingElement(
      <Link to="/activities/scholarships/new">Create a New Scholarship</Link>,
    )).to.equal(true);
  });

  it('contains no Link if not logged in', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        authenticated={false}
        match={{ url: '/activities/scholarships' }}
      />,
    );

    expect(wrapper.containsMatchingElement(
      <Link to="/activities/scholarships/new">Create a New Event</Link>,
    )).to.equal(false);
  });

  it('renders list of scholarships', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        match={{ url: '/activities/scholarships' }}
        scholarships={scholarships}
      />,
    );

    expect(wrapper.find({ to: '/activities/scholarships/1' }).exists()).to.equal(true);

    expect(wrapper.contains([
      <h5>{scholarships[1].deadline}</h5>,
      <h5>{scholarships[1].eligibility}</h5>,
      <p>{scholarships[1].description}</p>,
    ])).to.equal(true);

    expect(wrapper.find({ to: '/activities/scholarships/2' }).exists()).to.equal(true);

    expect(wrapper.contains([
      <h5>{scholarships[2].deadline}</h5>,
      <h5>{scholarships[2].eligibility}</h5>,
      <p>{scholarships[2].description}</p>,
    ])).to.equal(true);
  });

  it('renders message if there are no scholarships', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        match={{ url: '/activities/scholarships' }}
      />,
    );

    expect(wrapper.contains([
      <p>There are no scholarships at the moment</p>,
    ])).to.equal(true);
  });

  it('displays links to edit and delete if authed', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        authenticated
        match={{ url: '/activities/scholarships' }}
        scholarships={scholarships}
      />,
    );

    expect(wrapper.find({
      to: '/activities/scholarships/edit/1',
    }).exists()).to.equal(true);

    expect(wrapper.find({
      to: '/activities/scholarships/edit/2',
    }).exists()).to.equal(true);

    expect(wrapper.find('a')).to.have.length(2);
  });

  it('does not display edit and delete links if not authed', function () {
    const wrapper = shallow(
      <ScholarshipsIndex
        match={{ url: '/activities/scholarships' }}
        scholarships={scholarships}
      />,
    );

    expect(wrapper.find({
      to: '/activities/scholarships/edit/1',
    }).exists()).to.equal(false);

    expect(wrapper.find({
      to: '/activities/scholarships/edit/2',
    }).exists()).to.equal(false);

    expect(wrapper.find('a')).to.have.length(0);
  });
});
