import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ScholarshipsEdit from '../../src/components/scholarshipsEdit';
import ScholarshipsEditForm from '../../src/components/scholarshipsEditForm';

describe(('ScholarshipsEdit Component'), () => {
  it('contains ScholarshipsEditForm Component', () => {
    const wrapper = shallow(<ScholarshipsEdit />);

    expect(wrapper.find(ScholarshipsEditForm).exists()).to.equal(true);
  });

  it('fires scholarshipEditFormSubmit on submit', () => {
    const scholarshipsEditFormSubmit = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsEdit scholarshipsEditFormSubmit={scholarshipsEditFormSubmit} />,
    );

    wrapper.find(ScholarshipsEditForm).simulate('submit');
    expect(scholarshipsEditFormSubmit.calledOnce).to.equal(true);
  });
});
