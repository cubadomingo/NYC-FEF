import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Activities from 'components/activities';

describe('Activities Component', () => {
  xit('contains a root route with category links', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/activities']}>
        <Activities match={{ url: '/activities' }} />
      </MemoryRouter>,
    );

    expect(
      wrapper.find('[href="/activities/events"]'),
    ).to.have.length(1);
    expect(
      wrapper.find('[href="/activities/fundraisers"]'),
    ).to.have.length(1);
    expect(
      wrapper.find('[href="/activities/initiatives"]'),
    ).to.have.length(1);
    expect(
      wrapper.find('[href="/activities/scholarships"]'),
    ).to.have.length(1);
  });

  it('contains a route for events', () => {
    const wrapper = shallow(
      <Activities match={{ url: '/activities' }} />,
    );

    expect(wrapper.containsMatchingElement(
      <Route path="/activities/events" />,
    )).to.equal(true);
  });
});
