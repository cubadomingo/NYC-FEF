import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import requireAuth from '../../src/higherOrderComponents/requireAuth';

describe('Authentication HOC', () => {
  const TestComponent = () => (
    <h1>Testing</h1>
  );

  it('renders a Redirect component when not authenticated', () => {
    const AuthenticatedComponent = requireAuth(TestComponent);
    const wrapper = shallow(<AuthenticatedComponent />);

    expect(wrapper.find('Redirect')).to.have.length(1);
  });

  it('renders the component when authenticated', () => {
    const AuthenticatedComponent = requireAuth(TestComponent);
    const wrapper = shallow(<AuthenticatedComponent authenticated="true" />);

    expect(wrapper.find('TestComponent')).to.have.length(1);
    expect(wrapper.first().dive().shallow().find('h1')).to.have.length(1);
  });
});
