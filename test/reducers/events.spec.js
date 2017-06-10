import { expect } from 'chai';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reducer, {
  mapStateToProps,
} from 'reducers/events';
import {
  fetchEvents,
  fetchEvent,
  fetchLatestEvent,
  deleteEvent,
} from 'actions/index';
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_LAST_EVENT,
  EVENT_DELETE_SUCCESS,
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

  it('dispatches EVENT_DELETE_SUCCESS', function (done) {
    const event = [{
      id: 1,
      title: 'sample 1',
      description: 'lorem',
      datetime: 'sometime',
      location: 'somewhere',
    }];

    const state = {
      data: {
        1: event[0],
      },
    };

    const store = mockStore({});

    const expectedActions = [{ type: EVENT_DELETE_SUCCESS, payload: event[0].id }];

    store.dispatch(deleteEvent(1));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { event },
      })
      .then(() => {
        expect(reducer(state, store.getActions()[0])).to.deep.equal({
          data: {},
          deleteSuccess: true,
        });

        expect(store.getActions()).to.deep.equal(expectedActions);
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
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

    const expectedActions = [{ type: FETCH_EVENTS, payload: events }];

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


  it('dispatches FETCH_EVENT', function (done) {
    const store = mockStore({});
    const event = [{
      id: 1,
      title: 'sample 1',
      description: 'lorem',
      datetime: 'sometime',
      location: 'somewhere',
    }];

    const expectedActions = [{ type: FETCH_EVENT, payload: event[0] }];

    store.dispatch(fetchEvent());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { event },
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

  it('dispatches FETCH_LAST_EVENT', function (done) {
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

    const expectedActions = [{ type: FETCH_LAST_EVENT, payload: events[1] }];

    store.dispatch(fetchLatestEvent());

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
    expect(reducer(undefined, {})).to.deep.equal({ data: {}, latestEvent: [], newPost: [] });
  });

  it('should mapStateToProps', function () {
    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    };

    const state = {
      authenticate: {
        authenticated: true,
      },
      events: {
        data: [],
        submitSuccess: undefined,
        deleteSuccess: undefined,
        latestEvent: [],
        newPostId: undefined,
      },
    };

    expect(mapStateToProps(state, ownProps)).to.deep.equal({
      events: [],
      event: undefined,
      authenticated: true,
      newPostId: undefined,
      editPostId: undefined,
      editSuccess: undefined,
      submitSuccess: undefined,
      initialValues: undefined,
      deleteSuccess: undefined,
      latestEvent: [],
    });
  });
});
