import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './tagline.scss';

const Tagline = () => (
  <div styleName="tagline" className="text-center">
    <div className="container">
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p>
        Phasellus congue eu sem sit amet tempor. Morbi sapien justo, ornare
        quis sapien vitae. Phasellus congue eu sem sit amet tempor. Morbi
        sapien justo, ornare quis sapien vitae.
      </p>
    </div>
  </div>
);

export default CSSModules(Tagline, styles);
