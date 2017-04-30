import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../src/components/home/index';
import BackgroundImage from '../../src/components/home/backgroundImage';
import Tagline from '../../src/components/home/tagline';
import InformationRow from '../../src/components/home/informationRow';
import Leadership from '../../src/components/home/leadership';

describe('Home Component', () => {
  it('should render 4 Components', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.containsAllMatchingElements([
      <BackgroundImage />,
      <Tagline />,
      <InformationRow />,
      <Leadership />,
    ])).to.equal(true);
  });
});
