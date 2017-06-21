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
  submitNewScholarship,
  editScholarship,
  deleteScholarship,
} from 'actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Scholarships Reducer', function () {
  const scholarship = [{
    id: 1,
    title: 'sample 1',
    description: 'lorem ipsum',
    deadline: 'time',
    eligibility: 'foo',
  }];

  const data = [{
    id: 1,
    title: 'sample edit',
    description: 'lorem ipsum',
    deadline: 'time',
    eligibility: 'foo',
    created_at: 'made',
    updated_at: 'once',
  }];

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

  it('submits a new scholarship', function (done) {
    const store = mockStore({});

    store.dispatch(submitNewScholarship(data));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarship },
      })
      .then(() => {
        expect(reducer({}, store.getActions()[0])).to.deep.equal({
          newId: 1,
          submitSuccess: true,
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('edits a single scholarship', function (done) {
    const store = mockStore({});

    store.dispatch(editScholarship(data));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarship },
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

  it('deletes a scholarship', function (done) {
    const store = mockStore({});

    const state = {
      data: {
        1: {},
      },
    };

    store.dispatch(deleteScholarship(1));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { scholarship },
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

  it('mapsStateToProps', function () {
    const state = {
      authenticate: {
        authenticated: true,
      },
      scholarships: {
        editId: 1,
        newId: 1,
        editSuccess: true,
        deleteSuccess: true,
        submitSuccess: true,
        scholarship: {},
        data: {
          1: {},
          2: {},
        },
        latestScholarship: {},
      },
    };

    const ownProps = {
      match: {
        params: {
          id: 1,
        },
      },
    };

    expect(mapStateToProps(state, ownProps)).to.deep.equal({
      authenticated: true,
      scholarships: {
        1: {},
        2: {},
      },
      latestScholarship: {},
      scholarship: {},
      deleteSuccess: true,
      submitSuccess: true,
      editSuccess: true,
      initialValues: {},
      editId: 1,
      newId: 1,
    });
  });
});
