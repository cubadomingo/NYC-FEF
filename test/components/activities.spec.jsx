import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Activities from '../../src/components/activities/index';
import ActivitiesNavbar from '../../src/components/layout/activitiesNavbar';

describe('Activities Component', () => {
  it('should render ActivitiesNavbar and Routes', () => {
    const wrapper = shallow(
      <Activities match={{ url: '/activities' }} />,
    );

    expect(wrapper.find(ActivitiesNavbar)).to.have.length(1);
    expect(wrapper.find(Route)).to.have.length(4);
  });
});
