import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsEditForm } from '../../src/components/scholarshipsEditForm';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
} from '../../src/components/scholarshipsFormFields';

describe('ScholarshipsEditForm Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<ScholarshipsEditForm />);

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={renderTitleField} />,
      <Field name="description" component={renderBodyField} />,
      <Field name="eligibility" component={renderBodyField} />,
      <div>
        <Field name="deadline" component={renderDateField} />
      </div>,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <button>Submit</button>,
    )).to.equal(true);
  });

  it('calls submitEditedScholarship on form submit', () => {
    const submitEditedScholarship = sinon.spy();
    const wrapper = shallow(<ScholarshipsEditForm submitEditedScholarship={submitEditedScholarship} />);

    wrapper.simulate('submit');

    expect(submitEditedScholarship.calledOnce).to.equal(true);
  });
});
