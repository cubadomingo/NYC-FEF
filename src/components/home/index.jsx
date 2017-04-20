import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import InformationRow from './informationRow';
import Leadership from './leadership';

let BackgroundImage = () => (
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

BackgroundImage = CSSModules(BackgroundImage, styles);

let Tagline = () => (
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

Tagline = CSSModules(Tagline, styles);

let Subscribe = () => (
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

Subscribe = CSSModules(Subscribe, styles);

const Home = () => (
  <div>
    <BackgroundImage />
    <Tagline />
    <InformationRow />
    <Leadership />
    <Subscribe />
  </div>
);

export default Home;
