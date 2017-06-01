import { expect } from 'chai';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reducer, {
  mapStateToProps,
} from 'reducers/events';
import {
  fetchEvents,
} from 'actions/index';
import {
  FETCH_EVENTS,
} from 'actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Events Reducer', function () {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_EVENTS', function (done) {
    const store = mockStore({});
    const events = [{
      title: 'sample 1',
      description: 'lorem',
      datetime: 'sometime',
      location: 'somewhere',
    },
    {
      title: 'sample 2',
      description: 'lorem',
      datetime: 'sometime',
      location: 'somewhere',
    }];

    const expectedActions = [{ type: FETCH_EVENTS, payload: { events } }];

    store.dispatch(fetchEvents());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { events },
      })
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('should initialize state', function () {
    expect(reducer(undefined, {})).to.deep.equal({ events: [] });
  });

  it('should mapStateToProps', function () {
    const state = {
      events: {
        events: [],
      },
    };

    expect(mapStateToProps(state)).to.deep.equal({
      events: [],
      latestEvent: undefined,
    });
  });
});
