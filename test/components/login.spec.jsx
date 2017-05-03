import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login } from '../../src/components/login';

describe('Login Component', () => {
  it('should render a sign in button', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('#signin')).to.have.length(1);
    expect(wrapper.find('#signout')).to.have.length(0);
  });

  it('should render a sign out button', () => {
    const wrapper = shallow(<Login authenticated="true" />);

    expect(wrapper.find('#signin')).to.have.length(0);
    expect(wrapper.find('#signout')).to.have.length(1);
  });

  it('toggles signin', () => {
    const signIn = sinon.spy();
    const wrapper = shallow(<Login signIn={signIn} />);

    wrapper.find('#signin').simulate('click');

    expect(signIn.calledOnce).to.equal(true);
  });

  it('toggle signout', () => {
    const signOut = sinon.spy();
    const wrapper = shallow(<Login authenticated="true" signOut={signOut} />);

    wrapper.find('#signout').simulate('click');

    expect(signOut.calledOnce).to.equal(true);
  });
});
