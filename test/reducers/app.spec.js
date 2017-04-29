import { expect } from 'chai';
import reducer from '../../src/reducers/app';
import { setInitialStyles } from '../../src/actions/index';

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
