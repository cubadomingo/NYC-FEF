import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './subscribe.scss';

const Subscribe = () => (
  <div styleName="subscribe" className="container-fluid">
    <h2 className="text-center">Subscribe and Stay Up To Date</h2>
    <div className="text-center">
      <input
        styleName="input"
        className="form-control"
        placeholder="example@gmail.com"
      />
      <button
        styleName="button"
        className="btn btn-outline-secondary"
      >
        Submit
      </button>
    </div>
  </div>
);

export default CSSModules(Subscribe, styles);
