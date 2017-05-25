import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ScholarshipsShow from 'containers/scholarshipsShow';

describe('ScholarshipsShow Component', () => {
  const scholarship = {
    title: 'Sample Scholarship',
    deadline: 'June 7th 2018',
    eligibility: 'High School Students',
    description: 'Lorem Ipsum',
  };

  it('fetches scholarship on component mount', () => {
    const fetchScholarship = sinon.spy();

    mount(<ScholarshipsShow match={{ params: 1 }} scholarship={scholarship} fetchScholarship={fetchScholarship} />);
    expect(fetchScholarship.calledOnce).to.equal(true);
  });

  it('renders event title, eligibility, description, deadline', () => {
    const wrapper = shallow(<ScholarshipsShow match={{ params: 1 }} scholarship={scholarship} />);

    expect(wrapper.containsAllMatchingElements([
      <h1>{scholarship.title}</h1>,
      <h2>{scholarship.deadline}</h2>,
    ])).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <p>{scholarship.eligibility}</p>,
    )).to.equal(true);

    expect(wrapper.containsMatchingElement(
      <p>{scholarship.description}</p>,
    )).to.equal(true);
  });
});
