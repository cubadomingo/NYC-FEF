import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from 'components/about';
import Mission from 'components/mission';
import Philosophy from 'components/philosophy';
import FAQ from 'components/faq';

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
