import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Route } from 'react-router-dom';
import { App } from '../../src/containers/app';
import Navbar from '../../src/components/navbar';
import Subscribe from '../../src/components/subscribe';
import Footer from '../../src/components/footer';

describe('App Container', () => {
  it('changes the document styles on componentDidMount', () => {
    const setInitialStyles = sinon.spy();

    mount(<App setInitialStyles={setInitialStyles} />);
    expect(setInitialStyles.calledOnce).to.equal(true);
  });

  it('contains Layout Components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsAllMatchingElements([
      <Navbar />,
      <Subscribe />,
      <Footer />,
    ]));
  });

  it('contains routes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsAllMatchingElements([
      <Route path="/" />,
      <Route path="/about" />,
      <Route path="/activities" />,
      <Route path="/login" />,
    ])).to.equal(true);
  });
});
