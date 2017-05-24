import React from 'react';
import CSSModules from 'react-css-modules';

import Mission from 'components/mission';
import Philosophy from 'components/philosophy';
import FAQ from 'components/faq';
import styles from 'styles/about.scss';


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
