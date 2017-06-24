import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Route } from 'react-router-dom';
import Scholarships from 'components/scholarships';
import ActivitiesNavbar from 'components/activitiesNavbar';

describe('Scholarships Component', () => {
  it('contains routes for new, edit, show, and index', () => {
    const wrapper = shallow(
      <Scholarships match={{ url: '/activities/scholarships' }} />,
    );

    expect(wrapper.containsAllMatchingElements([
      <Route path="/activities/scholarships" />,
      <Route path="/activities/scholarships/new" />,
      <Route path="/activities/scholarships/:id" />,
      <Route path="/activities/scholarships/edit/:id" />,
    ])).to.equal(true);
  });

  it('contains ActivitiesNavbar', () => {
    const wrapper = shallow(
      <Scholarships match={{ url: '/activities/scholarships' }} />,
    );

    expect(wrapper.exists(ActivitiesNavbar)).to.equal(true);
  });
});
