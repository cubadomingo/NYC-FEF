import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './backgroundImage.scss';

const BackgroundImage = () => (
  <div styleName="background-image">
    <div className="container">
      <div>
        <h1 styleName="text-top">
          <span styleName="text-box">
            FINANCIAL
          </span>
        </h1>
        <h1 styleName="text-bottom">
          <span styleName="text-box">
            EMPOWERMENT FOUNDATION
          </span>
        </h1>
        <h1 styleName="text-small">
          <span styleName="text-box-white">
            Working to increase minority presence in the business world
          </span>
        </h1>
        <a styleName="button-donate" className="btn btn-secondary">Donate</a>
      </div>
    </div>
  </div>
);

export default CSSModules(BackgroundImage, styles);
