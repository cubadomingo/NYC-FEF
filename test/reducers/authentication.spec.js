import { expect } from 'chai';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reducer, {
  mapStateToProps,
} from 'reducers/authentication';
import {
  signIn,
  signOut,
} from 'actions/index';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
} from 'actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Authentication Reducer', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('initializes the state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ authenticated: false, error: null });
  });

  it('dispatches AUTH_USER and stores token', function (done) {
    const store = mockStore({});
    const expectedActions = [{ type: AUTH_USER }];
    const token = 'fakeToken';

    store.dispatch(signIn({
      username: 'cubadomingo',
      password: 'password',
    }));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { token },
      })
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
        expect(localStorage.getItem('token')).to.equal(token);
        done();
      });
    });
  });

  it('dispatches AUTH_ERROR', function (done) {
    const store = mockStore({});
    const expectedActions = [{
      type: AUTH_ERROR,
      payload: 'username or password is wrong',
    }];

    store.dispatch(signIn({
      username: 'badUsername',
      password: 'badPassword',
    }));

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: { message: 'username or password is wrong' },
      })
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
        done();
      });
    });
  });

  it('dispatches UNAUTH_USER', () => {
    expect(reducer({}, signOut())).to.deep.equal({ authenticated: false });
    expect(localStorage.getItem('token')).to.equal(null);
  });

  it('should mapStateToProps', () => {
    const state = {
      authenticate: {
        authenticated: false,
        error: null,
      },
    };

    expect(mapStateToProps(state)).to.deep.equal({
      authenticated: false,
      errorMessage: null,
    });
  });
});
