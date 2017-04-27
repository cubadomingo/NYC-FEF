import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Activities from '../../src/components/activities';
import Initiatives from '../../src/containers/initiatives';
import Scholarships from '../../src/containers/scholarships';
import Events from '../../src/containers/events';
import Fundraisers from '../../src/containers/fundraisers';

describe('Activities', () => {
  it('should render a header', () => {
    const wrapper = shallow(<Activities />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render a body paragraph', () => {
    const wrapper = shallow(<Activities />);
    expect(wrapper.find('p')).to.have.length(1)
  })

  it('should render 4 Components', () => {
    const wrapper = shallow(<Activities />);
    expect(wrapper.containsAllMatchingElements([
      <Initiatives />,
      <Scholarships />,
      <Events />,
      <Fundraisers />,
    ])).to.equal(true);
  });
});
