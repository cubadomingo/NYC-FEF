import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Route } from 'react-router-dom';
import Events from 'components/events';
import ActivitiesNavbar from 'components/activitiesNavbar';

describe('Events Component', () => {
  it('contains routes for new, edit, show, and index', () => {
    const wrapper = shallow(<Events match={{ url: '/activities/events' }} />);

    expect(wrapper.containsAllMatchingElements([
      <Route path="/activities/events" />,
      <Route path="/activities/events/new" />,
      <Route path="/activities/events/:id" />,
      <Route path="/activities/events/:id/edit" />,
    ])).to.equal(true);
  });

  it('contains ActivitiesNavbar', () => {
    const wrapper = shallow(<Events match={{ url: '/activities/events' }} />);

    expect(wrapper.exists(ActivitiesNavbar)).to.equal(true);
  });
});
