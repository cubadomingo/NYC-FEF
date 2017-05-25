import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router-dom';
import { ScholarshipsIndex } from 'containers/scholarshipsIndex';
import ScholarshipsList from 'components/scholarshipsList';

describe('ScholarshipsIndex Container', () => {
  it('contains ScholarshipsIndexList Component', () => {
    const wrapper = shallow(
      <ScholarshipsIndex match={{ url: '/activities/scholarships' }} />,
    );

    expect(wrapper.find(ScholarshipsList).exists()).to.equal(true);
  });

  it('contains Link to create a new scholarship if logged in', () => {
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
