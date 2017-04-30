import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from '../../src/components/about/index';
import Mission from '../../src/components/about/mission';
import Philosophy from '../../src/components/about/philosophy';
import FAQ from '../../src/components/about/faq';

describe('About Component', () => {
  it('should render Mission, Philosophy, and FAQ', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.containsAllMatchingElements([
      <Mission />,
      <Philosophy />,
      <FAQ />,
    ])).to.equal(true);
  });
});
