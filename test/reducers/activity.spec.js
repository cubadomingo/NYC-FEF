import { expect } from 'chai';
import reducer, {
  mapStateToProps,
} from '../../src/reducers/activity';
import {
  toggleEvents,
  toggleInitiatives,
  toggleScholarships,
  toggleFundraisers,
  fetchEvents,
  fetchInitiatives,
  fetchScholarships,
  fetchFundraisers,
} from '../../src/actions/index';

describe('Activity reducer', () => {
  it('initializes the state', () => {
    const initialState = {
      initiatives: {
        data: [],
        show: false,
      },
      events: {
        data: [],
        show: false,
      },
      scholarships: {
        data: [],
        show: false,
      },
      fundraisers: {
        data: [],
        show: false,
      },
    };
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });

  it('toggles events body', () => {
    expect(reducer({}, toggleEvents(true))).to.deep.equal(
      { events: { show: true } },
    );
  });

  it('toggles initiatives body', () => {
    expect(reducer({}, toggleInitiatives(true))).to.deep.equal(
      { initiatives: { show: true } },
    );
  });

  it('toggles scholarships body', () => {
    expect(reducer({}, toggleScholarships(true))).to.deep.equal(
      { scholarships: { show: true } },
    );
  });

  it('toggles fundraisers body', () => {
    expect(reducer({}, toggleFundraisers(true))).to.deep.equal(
      { fundraisers: { show: true } },
    );
  });

  it('fetches events', () => {
    expect(reducer({}, fetchEvents())).to.deep.equal(
      { events: { data: [] } },
    );
  });

  it('fetches initiatives', () => {
    expect(reducer({}, fetchInitiatives())).to.deep.equal(
      { initiatives: { data: [] } },
    );
  });

  it('fetches scholarships', () => {
    expect(reducer({}, fetchScholarships())).to.deep.equal(
      { scholarships: { data: [] } },
    );
  });

  it('fundraisers', () => {
    expect(reducer({}, fetchFundraisers())).to.deep.equal(
      { fundraisers: { data: [] } },
    );
  });

  it('should mapStateToProps', () => {
    const state = {
      activity: {
        initiatives: {
          data: [],
          show: false,
        },
        events: {
          data: [],
          show: false,
        },
        scholarships: {
          data: [],
          show: false,
        },
        fundraisers: {
          data: [],
          show: false,
        },
      },
    };

    const props = {
      scholarships: { data: [], show: false },
      initiatives: { data: [], show: false },
      events: { data: [], show: false },
      fundraisers: { data: [], show: false },
    };

    expect(mapStateToProps(state)).to.deep.equal(props);
  });
});
