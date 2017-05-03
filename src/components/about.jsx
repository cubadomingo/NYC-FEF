import React from 'react';
import CSSModules from 'react-css-modules';

import Mission from './mission';
import Philosophy from './philosophy';
import FAQ from './faq';
import styles from './about.scss';


const About = () => (
  <div>
    <div styleName="background" />
    <h1 styleName="main-text" className="text-center">WHAT WE{'\''}RE ABOUT</h1>
    <Mission />
    <Philosophy />
    <FAQ />
  </div>
);

export default CSSModules(About, styles);
