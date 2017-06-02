import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Activities } from 'components/activities';

describe('Activities Component', () => {
  it('contains a route for events', () => {
    const wrapper = shallow(
      <Activities match={{ url: '/activities' }} />,
    );

    expect(wrapper.find('Route')).to.have.length(3);

    expect(wrapper.find({
      path: '/activities',
    }).exists()).to.equal(true);

    expect(wrapper.find({
      path: '/activities/events',
    }).exists()).to.equal(true);

    expect(wrapper.find({
      path: '/activities/scholarships',
    }).exists()).to.equal(true);
  });
});
