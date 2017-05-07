import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ScholarshipsNew from '../../src/components/scholarshipsNew';
import ScholarshipsNewForm from '../../src/components/scholarshipsNewForm';

describe(('ScholarshipsNew Component'), () => {
  it('contains ScholarshipsNewForm Component', () => {
    const wrapper = shallow(<ScholarshipsNew />);

    expect(wrapper.exists(ScholarshipsNewForm)).to.equal(true);
  });

  it('fires scholarshipsNewFormSubmit on submit', () => {
    const scholarshipsNewFormSubmit = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsNew scholarshipsNewFormSubmit={scholarshipsNewFormSubmit} />,
    );

    wrapper.find(ScholarshipsNewForm).simulate('submit');
    expect(scholarshipsNewFormSubmit.calledOnce).to.equal(true);
  });
});
