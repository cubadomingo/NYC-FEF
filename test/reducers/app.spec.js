import { expect } from 'chai';
import reducer from 'reducers/app';
import { setInitialStyles } from 'actions/index';

describe('App Reducer', () => {
  it('initializes the state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('should set initial document styles', () => {
    expect(reducer({}, setInitialStyles())).to.deep.equal(
      { initial_styles_set: true },
    );
  });
});
