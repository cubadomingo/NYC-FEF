import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Activity from '../../src/components/activity';

describe('Category', () => {
  it('should render a div with title', () => {
    const wrapper = shallow(<Activity name="Initiatives" />);

    expect(wrapper.containsMatchingElement(
      <div><h1>Initiatives</h1></div>,
    )).to.equal(true);
  });

  it('should render a div with initiatives when show is true', () => {
    const data = [{ title: 'Lorem ipsum', body: 'More Lorem Ipsum' }];
    const wrapper = shallow(
      <Activity data={data} show="true" />,
      );

    expect(wrapper.containsMatchingElement(
      <div>
        <h4>
          Lorem ipsum
        </h4>
        <p>
          More Lorem Ipsum
        </p>
      </div>,
    )).to.equal(true);
  });

  it('should call toggleSection on click', () => {
    const toggleSection = sinon.spy();
    const wrapper = shallow(<Activity toggleSection={toggleSection} />);
    wrapper.simulate('click');

    expect(toggleSection.calledOnce).to.equal(true);
  });
});
