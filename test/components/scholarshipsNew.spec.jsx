import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsNew } from 'components/scholarshipsNew';
import { scholarshipsField } from 'utils/formFields';

describe('ScholarshipsNew Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<ScholarshipsNew />);

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

  it('calls submitNewScholarship on form submit', () => {
    const submitNewScholarship = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsNew submitNewScholarship={submitNewScholarship} />,
    );

    wrapper.find('form').simulate('submit');

    expect(submitNewScholarship.calledOnce).to.equal(true);
  });
});
