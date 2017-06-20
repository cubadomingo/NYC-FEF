import { expect } from 'chai';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reducer, {
  mapStateToProps,
} from 'reducers/scholarships';
import {
  fetchLatestScholarship,
  fetchScholarships,
  fetchScholarship,
} from 'actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Scholarships Reducer', function () {
  const scholarships = [{
    id: 1,
    title: 'sample 1',
    description: 'lorem ipsum',
    deadline: 'time',
    eligibility: 'foo',
  },
  {
    id: 2,
    title: 'sample 2',
    description: 'lorem ipsum',
    deadline: 'time',
    eligibility: 'foo',
  }];

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('returns latest scholarship', function (done) {
    const store = mockStore({});

    store.dispatch(fetchLatestScholarship());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarships },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal(
          { latestScholarship: scholarships[1] },
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('returns list of all scholarships', function (done) {
    const store = mockStore({});

    store.dispatch(fetchScholarships());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarships },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          data: {
            1: scholarships[0],
            2: scholarships[1],
          },
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('returns a single scholarship', function (done) {
    const scholarship = [{
      id: 1,
      title: 'sample 1',
      description: 'lorem ipsum',
      deadline: 'time',
      eligibility: 'foo',
    }];

    const store = mockStore({});

    store.dispatch(fetchScholarship());

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarship },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          data: {
            1: scholarships[0],
          },
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('mapsStateToProps', function () {
    const state = {
      authenticate: {
        authenticated: true,
      },
      scholarships: {
        scholarship: {},
        data: {},
        latestScholarship: {},
      },
    };

    expect(mapStateToProps(state)).to.deep.equal({
      authenticated: true,
      scholarship: {},
      latestScholarship: {},
      scholarships: {},
    });
  });
});
