import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { App } from '../../src/containers/app';

describe('App Container', () => {
  it('should alter the document styles on componentDidMount', () => {
    const setInitialStyles = sinon.spy();

    mount(<App setInitialStyles={setInitialStyles} />);
    expect(setInitialStyles.calledOnce).to.equal(true);
  });
});
