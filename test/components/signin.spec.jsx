import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import { SignIn } from 'components/signin';

describe('SignIn Component', () => {
  it('renders username and password fields and a submit button', () => {
    const wrapper = shallow(<SignIn handleSubmit={() => {}} />);

    expect(wrapper.find('Field')).to.have.length(2);
    expect(wrapper.find({
      name: 'username',
      label: 'Username',
      type: 'text',
    }).exists()).to.equal(true);
    expect(wrapper.find({
      name: 'password',
      label: 'Password',
      type: 'password',
    }).exists()).to.equal(true);
    expect(wrapper.find('button').exists()).to.equal(true);
  });

  it('displays errorMessage if present', () => {
    const wrapper = shallow(
      <SignIn errorMessage="sample error" handleSubmit={() => {}} />,
    );

    expect(wrapper.containsMatchingElement(
      <div className="alert alert-danger">
        <strong>Oops!</strong> sample error
      </div>,
    )).to.equal(true);
  });

  it('redirects to home if authenticated', () => {
    const wrapper = shallow(
      <SignIn authenticated="true" handleSubmit={() => {}} />,
    );

    expect(wrapper.containsMatchingElement(
      <Redirect to="/" />,
    )).to.equal(true);
  });
});
