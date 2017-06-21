import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsNew } from 'components/scholarshipsNew';
import { scholarshipsField } from 'utils/formFields';

describe('ScholarshipsNew Component', function () {
  it('renders 4 fields and a submit button', function () {
    const wrapper = shallow(
      <ScholarshipsNew handleSubmit={fn => (fn)} />,
    );

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

  it('calls submitNewScholarship on form submit', function () {
    const submitNewScholarship = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsNew
        handleSubmit={fn => (fn)}
        submitNewScholarship={submitNewScholarship}
      />,
    );

    wrapper.find('form').simulate('submit');

    expect(submitNewScholarship.calledOnce).to.equal(true);
  });

  it('redirects to new event on success', function () {
    const wrapper = shallow(
      <ScholarshipsNew
        submitSuccess
        handleSubmit={fn => (fn)}
      />,
    );

    expect(wrapper.find('Redirect').exists()).to.equal(true);
  });
});
