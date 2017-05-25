import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from 'components/home';
import BackgroundImage from 'components/homeImage';
import Tagline from 'components/tagline';
import InformationRow from 'components/informationRow';
import Leadership from 'components/leadership';

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
