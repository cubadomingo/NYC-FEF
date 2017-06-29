import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from 'styles/homeImage.scss';

const HomeImage = () => (
  <div styleName="background-image">
    <div className="container">
      <div>
        <h1 styleName="text-top">
          <span styleName="text-box">
            FINANCIAL
          </span>
        </h1>
        <h1 styleName="text-middle">
          <span styleName="text-box">
            EMPOWERMENT
          </span>
        </h1>
        <h1 styleName="text-bottom">
          <span styleName="text-box">
            FOUNDATION
          </span>
        </h1>
        <h1 styleName="text-small">
          <span styleName="text-box-white">
            Working to increase the minority presence
          </span>
        </h1>
        <h1 styleName="text-small-bottom">
          <span styleName="text-box-white">
            in the business world
          </span>
        </h1>
        <Link to="/get-involved" styleName="button-donate" className="btn btn-primary">Donate</Link>
      </div>
    </div>
  </div>
);

export default CSSModules(HomeImage, styles);
