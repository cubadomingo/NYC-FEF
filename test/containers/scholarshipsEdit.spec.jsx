import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsEdit } from 'containers/scholarshipsEdit';
import { scholarshipsField } from 'utils/formFields';

describe('ScholarshipsEdit Component', function () {
  it('renders 4 fields and a submit button', function () {
    const wrapper = shallow(<ScholarshipsEdit handleSubmit={fn => (fn)} />);

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={scholarshipsField} />,
      <Field name="description" component={scholarshipsField} />,
      <Field name="eligibility" component={scholarshipsField} />,
      <Field name="deadline" component={scholarshipsField} />,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <button>Submit</button>,
    )).to.equal(true);
  });

  it('calls callback on form submit', function () {
    const editScholarship = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsEdit
        handleSubmit={fn => (fn)}
        editScholarship={editScholarship}
      />,
    );

    wrapper.find('form').simulate('submit');

    expect(editScholarship.calledOnce).to.equal(true);
  });
});
