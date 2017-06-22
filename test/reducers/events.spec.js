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
  editEvent,
} from 'actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Events Reducer', function () {
  const event = [{
    id: 1,
    title: 'sample 1',
    description: 'lorem',
    datetime: 'sometime',
    location: 'somewhere',
  }];

  const events = [{
    id: 1,
    title: 'sample 1',
    description: 'lorem',
    datetime: 'sometime',
    location: 'somewhere',
  },
  {
    id: 2,
    title: 'sample 2',
    description: 'lorem',
    datetime: 'sometime',
    location: 'somewhere',
  }];

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('deletes an event', function (done) {
    const state = {
      data: {
        1: event[0],
      },
    };

    const store = mockStore({});

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
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('fetches all events', function (done) {
    const store = mockStore({});

    store.dispatch(fetchEvents());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { events },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          data: {
            1: events[0],
            2: events[1],
          },
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('fetches an event', function (done) {
    const store = mockStore({});

    store.dispatch(fetchEvent());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { event },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          data: {
            1: event[0],
          },
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('fetches the last event', function (done) {
    const store = mockStore({});

    store.dispatch(fetchLatestEvent());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { events },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          latestEvent: events[1],
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('edits an event', function (done) {
    const store = mockStore({});

    const data = {
      id: 1,
      title: 'lorem ipsum',
      description: 'lorem',
      location: 'blah',
      datetime: 'some time',
      created_at: 'dfs',
      updated_at: 'dasa',
    };

    store.dispatch(editEvent(data));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { event },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          editId: 1,
          editSuccess: true,
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
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
      event: event[0],
      events: {
        data: {
          1: events[0],
          2: events[1],
        },
        submitSuccess: true,
        deleteSuccess: true,
        editSuccess: true,
        initialValues: event[0],
        latestEvent: event[0],
        newId: 1,
        editId: 1,
      },
    };

    expect(mapStateToProps(state, ownProps)).to.deep.equal({
      events: {
        1: events[0],
        2: events[1],
      },
      event: event[0],
      authenticated: true,
      newId: 1,
      editId: 1,
      editSuccess: true,
      submitSuccess: true,
      initialValues: event[0],
      deleteSuccess: true,
      latestEvent: event[0],
    });
  });
});
