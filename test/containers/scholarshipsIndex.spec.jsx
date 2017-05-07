import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router-dom';
import { ScholarshipsIndex } from '../../src/containers/scholarshipsIndex';
import ScholarshipsIndexList from '../../src/components/scholarshipsIndexList';

describe('ScholarshipsIndex Container', () => {
  it('contains ScholarshipsIndexList Component', () => {
    const wrapper = shallow(
      <ScholarshipsIndex match={{ url: '/activities/scholarships' }} />,
    );

    expect(wrapper.find(ScholarshipsIndexList).exists()).to.equal(true);
  });

  it('contains Link to create a new event if logged in', () => {
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

  it('contains no Link if not logged in', () => {
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
});
