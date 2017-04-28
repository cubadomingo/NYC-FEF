import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Activity from '../../src/components/activity';
import { Activities } from '../../src/containers/activities';

describe('Activities', () => {
  const props = {
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
});
