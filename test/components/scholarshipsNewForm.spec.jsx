import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Field } from 'redux-form';
import { ScholarshipsNewForm } from '../../src/components/scholarshipsNewForm';
import {
  renderTitleField,
  renderBodyField,
  renderDateField,
} from '../../src/components/scholarshipsFormFields';

describe('EventsNewForm Component', () => {
  it('renders 4 fields and a submit button', () => {
    const wrapper = shallow(<ScholarshipsNewForm />);

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

  it('calls submitNewScholarship on form submit', () => {
    const submitNewScholarship = sinon.spy();
    const wrapper = shallow(<ScholarshipsNewForm submitNewScholarship={submitNewScholarship} />);

    wrapper.simulate('submit');

    expect(submitNewScholarship.calledOnce).to.equal(true);
  });
});
