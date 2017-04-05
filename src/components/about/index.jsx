import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

let Mission = () => (
  <div className="container" styleName="mission">
    <div styleName="text-box">
      <h2>Our Mission</h2>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, urna a convallis ullamcorper, ligula sem pulvinar arcu, tempor semper velit mi in magna. Mauris nec auctor odio. Donec ultrices lacus sed leo laoreet aliquam. Cras eu volutpat ante. Nulla aliquam volutpat felis, sed iaculis libero posuere a. Phasellus nec metus eu ligula fermentum accumsan. Nullam vehicula urna dolor, quis sagittis urna auctor at. Duis eget magna at erat hendrerit aliquam ut eu orci. Nullam sit amet sem molestie, dictum lectus sit amet, tempus mi. Sed faucibus bibendum maximus. Morbi ac dui sagittis, malesuada ex non, sagittis ex. Proin nec diam leo.
    </p>
    <p>
      Praesent dictum lacus turpis, eget pulvinar mauris semper eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Vivamus dolor enim, condimentum ac accumsan at, congue sed elit. Aenean tincidunt non lacus in tincidunt. Quisque non luctus odio. Suspendisse tristique ipsum ex, eu bibendum mauris scelerisque sed. Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar est.
    </p>
  </div>
);

Mission = CSSModules(Mission, styles);

let Philosophy = () => (
  <div className="container" styleName="philosophy">
    <div styleName="text-box">
      <h2 className="text-right">Our Philosophy</h2>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, urna a convallis ullamcorper, ligula sem pulvinar arcu, tempor semper velit mi in magna. Mauris nec auctor odio. Donec ultrices lacus sed leo laoreet aliquam. Cras eu volutpat ante. Nulla aliquam volutpat felis, sed iaculis libero posuere a. Phasellus nec metus eu ligula fermentum accumsan. Nullam vehicula urna dolor, quis sagittis urna auctor at. Duis eget magna at erat hendrerit aliquam ut eu orci. Nullam sit amet sem molestie, dictum lectus sit amet, tempus mi. Sed faucibus bibendum maximus. Morbi ac dui sagittis, malesuada ex non, sagittis ex. Proin nec diam leo.
    </p>
    <p>
      Praesent dictum lacus turpis, eget pulvinar mauris semper eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Vivamus dolor enim, condimentum ac accumsan at, congue sed elit. Aenean tincidunt non lacus in tincidunt. Quisque non luctus odio. Suspendisse tristique ipsum ex, eu bibendum mauris scelerisque sed. Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar est.
    </p>
  </div>
);

Philosophy = CSSModules(Philosophy, styles);

let FAQ = () => (
  <div styleName="FAQ">
    <div styleName="FAQ-container" className="container">
      <div styleName="text-box">
        <h2 className="text-center">Frequently Asked Questions</h2>
      </div>
      <div styleName="question">
        <h4 className="text-left">Vivamus dolor enim, condimentum ac accumsan at?</h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">Morbi ac dui sagittis, malesuada ex non, sagittis ex. Proin nec diam leo.?</h4>
        <p>
          Duis eget magna at erat hendrerit aliquam ut eu orci. Nullam sit amet sem molestie, dictum lectus sit amet, tempus mi. Sed faucibus bibendum maximus. Morbi ac dui sagittis, malesuada ex non, sagittis ex. Proin nec diam leo.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar est?</h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">Donec ultrices lacus sed leo laoreet aliquam. Cras eu volutpat ante?</h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
      <div styleName="question">
        <h4 className="text-left">Vivamus dolor enim, condimentum ac accumsan at?</h4>
        <p>
          Sed in risus id dui tristique feugiat. In vel eleifend urna. Sed a bibendum ante. Proin sed pulvinar.
        </p>
      </div>
    </div>
  </div>
);

FAQ = CSSModules(FAQ, styles);

const About = () => (
  <div>
    <div styleName="background" />
    <h1 styleName="main-text" className="text-center">WHAT WE'RE ABOUT</h1>
    <Mission />
    <Philosophy />
    <FAQ />
  </div>
);

export default CSSModules(About, styles);
