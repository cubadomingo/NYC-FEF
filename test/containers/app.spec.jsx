import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { App } from 'containers/app';
import { Navbar } from 'components/navbar';
import Footer from 'components/footer';

describe('App Container', () => {
  it('contains Layout Components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsAllMatchingElements([
      <Navbar />,
      <Footer />,
    ]));
  });

  it('contains routes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsAllMatchingElements([
      <Route path="/" />,
      <Route path="/about" />,
      <Route path="/activities" />,
      <Route path="/signin" />,
    ])).to.equal(true);
  });
});
