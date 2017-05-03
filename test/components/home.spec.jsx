import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../src/components/home';
import BackgroundImage from '../../src/components/homeImage';
import Tagline from '../../src/components/tagline';
import InformationRow from '../../src/components/informationRow';
import Leadership from '../../src/components/leadership';

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
