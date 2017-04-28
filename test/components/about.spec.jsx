import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from '../../src/components/about';
import Mission from '../../src/components/mission';
import Philosophy from '../../src/components/philosophy';
import FAQ from '../../src/components/faq';

describe('About', () => {
  it('should render Mission, Philosophy, and FAQ', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.containsAllMatchingElements([
      <Mission />,
      <Philosophy />,
      <FAQ />,
    ])).to.equal(true);
  });
});
