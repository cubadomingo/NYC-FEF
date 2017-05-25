import { expect } from 'chai';
import reducer, {
  mapStateToProps,
} from 'reducers/authentication';
import {
  signIn,
  signOut,
} from 'actions/index';

describe('Authentication Reducer', () => {
  xit('initializes the state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ authenticated: false });
  });

  it('signs a user in', () => {
    expect(reducer({}, signIn())).to.deep.equal({ authenticated: true });
  });

  it('signs a user out', () => {
    expect(reducer({}, signOut())).to.deep.equal({ authenticated: false });
  });

  it('should mapStateToProps', () => {
    const state = {
      authenticate: { authenticated: false },
    };

    expect(mapStateToProps(state)).to.deep.equal({ authenticated: false });
  });
});
