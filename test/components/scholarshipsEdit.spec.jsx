import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsEdit } from 'components/scholarshipsEdit';
import { scholarshipsField } from 'utils/formFields';

describe('ScholarshipsEdit Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<ScholarshipsEdit />);

    expect(wrapper.containsAllMatchingElements([
      <Field name="title" component={scholarshipsField} />,
      <Field name="description" component={scholarshipsField} />,
      <Field name="eligibility" component={scholarshipsField} />,
      <div>
        <Field name="deadline" component={scholarshipsField} />
      </div>,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <button>Submit</button>,
    )).to.equal(true);
  });

  it('calls callback on form submit', () => {
    const submitEditedScholarship = sinon.spy();
    const wrapper = shallow(
      <ScholarshipsEdit submitEditedScholarship={submitEditedScholarship} />,
    );

    wrapper.find('form').simulate('submit');

    expect(submitEditedScholarship.calledOnce).to.equal(true);
  });
});
