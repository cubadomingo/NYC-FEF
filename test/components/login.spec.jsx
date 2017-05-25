import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SignIn } from 'components/signIn';

describe('SignIn Component', () => {
  xit('should render a sign in button', () => {
    const wrapper = shallow(<SignIn />);

    expect(wrapper.find('#signin')).to.have.length(1);
    expect(wrapper.find('#signout')).to.have.length(0);
  });

  xit('should render a sign out button', () => {
    const wrapper = shallow(<SignIn authenticated="true" />);

    expect(wrapper.find('#signin')).to.have.length(0);
    expect(wrapper.find('#signout')).to.have.length(1);
  });

  xit('toggles signin', () => {
    const signIn = sinon.spy();
    const wrapper = shallow(<SignIn signIn={signIn} />);

    wrapper.find('#signin').simulate('click');

    expect(signIn.calledOnce).to.equal(true);
  });

  xit('toggle signout', () => {
    const signOut = sinon.spy();
    const wrapper = shallow(<SignIn authenticated="true" signOut={signOut} />);

    wrapper.find('#signout').simulate('click');

    expect(signOut.calledOnce).to.equal(true);
  });
});
