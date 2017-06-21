import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { ScholarshipsShow } from 'containers/scholarshipsShow';

describe('ScholarshipsShow Container', function () {
  const scholarship = {
    id: 1,
    title: 'Sample Scholarship',
    deadline: 'June 7th 2018',
    eligibility: 'High School Students',
    description: 'Lorem Ipsum',
  };

  it('fetches scholarship on component mount', function () {
    const fetchScholarship = sinon.spy();

    mount(
      <ScholarshipsShow
        match={{ params: 1 }}
        scholarship={scholarship}
        fetchScholarship={fetchScholarship}
      />,
    );
    expect(fetchScholarship.calledOnce).to.equal(true);
  });

  it('renders scholarship and edit/delete links if authed', function () {
    const wrapper = shallow(
      <ScholarshipsShow
        authenticated
        match={{ params: 1 }}
        scholarship={scholarship}
      />,
    );

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

    expect(wrapper.find('a')).to.have.length(1);

    expect(wrapper.find({
      to: '/activities/scholarships/edit/1',
    }).exists()).to.equal(true);
  });

  it('does not render edit/delete links if not authed', function () {
    const wrapper = shallow(
      <ScholarshipsShow
        match={{ params: 1 }}
        scholarship={scholarship}
      />,
    );

    expect(wrapper.find('a')).to.have.length(0);
    expect(wrapper.find({
      to: '/activities/scholarships/edit/1',
    }).exists()).to.equal(false);
  });
});
