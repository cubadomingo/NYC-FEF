import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Activity from '../../src/components/activity';
import { Activities, StyledActivities } from '../../src/containers/activities';

describe('Activities', () => {
  let props = {
    initiatives: {
      data: [],
      show: false,
      toggleFunction: () => {},
    },
    scholarships: {
      data: [],
      show: false,
      toggleFunction: () => {},
    },
    events: {
      data: [],
      show: false,
      toggleFunction: () => {},
    },
    fundraisers: {
      data: [],
      show: false,
      toggleFunction: () => {},
    },
  };

  it('should render a header', () => {
    const wrapper = shallow(<Activities {...props} />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render a paragraph', () => {
    const wrapper = shallow(<Activities {...props} />);
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should render 4 Category components', () => {
    const wrapper = shallow(<Activities {...props} />);
    expect(wrapper.find(Activity)).to.have.length(4);
  });

  it('should fetch resources on componentDidMount', () => {
    const fetchEvents = sinon.spy();
    const fetchInitiatives = sinon.spy();
    const fetchScholarships = sinon.spy();
    const fetchFundraisers = sinon.spy();

    props = {
      ...props,
      fetchEvents,
      fetchFundraisers,
      fetchInitiatives,
      fetchScholarships,
    };

    mount(<StyledActivities {...props} />);

    expect(fetchEvents.calledOnce).to.equal(true);
    expect(fetchInitiatives.calledOnce).to.equal(true);
    expect(fetchScholarships.calledOnce).to.equal(true);
    expect(fetchFundraisers.calledOnce).to.equal(true);
  });
});
