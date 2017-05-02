import React from 'react';
import { Route } from 'react-router-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Activities from '../../src/components/activities/index';
import Navbar from '../../src/components/activities/navbar';

describe('Activities Component', () => {
  it('should contain ActivitiesNavbar Component', () => {
    const wrapper = shallow(<Activities />);

    expect(wrapper.find(Navbar)).to.have.length(1);
  });

  it('should contain a route for events', () => {
    const wrapper = shallow(<Activities />);

    expect(wrapper.containsMatchingElement(
      <Route path="/activities/events" />)).to.equal(true);
  });
});
