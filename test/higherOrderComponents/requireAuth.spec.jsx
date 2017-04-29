import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Authentication } from '../../src/higherOrderComponents/requireAuth';

describe('Authentication HOC', () => {
  const TestComponent = () => (<div />);

  it('renders a Redirect component when not authenticated', () => {
    const wrapper = shallow(
      <Authentication composedComponent={TestComponent} />,
    );

    expect(wrapper.find('Redirect')).to.have.length(1);
  });

  it('renders the component when authenticated', () => {
    const wrapper = shallow(
      <Authentication
        composedComponent={TestComponent}
        authenticated="true"
      />,
    );

    expect(wrapper.find('TestComponent')).to.have.length(1);
    expect(wrapper.first().dive().shallow().find('div')).to.have.length(1);
  });
});
