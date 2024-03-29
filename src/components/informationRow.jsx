import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import aboutImage from 'assets/images/about.svg';
import activitiesImage from 'assets/images/activities.svg';
import getInvolvedImage from 'assets/images/getInvolved.svg';
import styles from 'styles/informationRow.scss';

let About = () => (
  <div className="col-lg-4 text-center" styleName="activity">
    <h4>About Us</h4>
    <img alt="nyc" styleName="icon" src={aboutImage} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
      efficitur nisi, in hendrerit nisi.
    </p>
    <Link to="/about" className="btn btn-outline-primary">About Us</Link>
  </div>
);

About = CSSModules(About, styles);

let Activities = () => (
  <div className="col-lg-4 text-center" styleName="activity">
    <h4>Activities</h4>
    <img alt="" styleName="icon-activities" src={activitiesImage} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
      efficitur nisi, in hendrerit nisi.
    </p>
    <Link to="/activities" className="btn btn-outline-primary">What We Do</Link>
  </div>
);

Activities = CSSModules(Activities, styles);

let GetInvolved = () => (
  <div className="col-lg-4 text-center" styleName="activity">
    <h4>Get Involved</h4>
    <img alt="" styleName="icon-get-involved" src={getInvolvedImage} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
      efficitur nisi, in hendrerit nisi.
    </p>
    <Link
      to="/get-involved"
      className="btn btn-outline-primary"
    >Get Involved</Link>
  </div>
);

GetInvolved = CSSModules(GetInvolved, styles);

const InformationRow = () => (
  <div styleName="information-row" className="container">
    <div className="row">
      <About />
      <Activities />
      <GetInvolved />
    </div>
  </div>
);

export default CSSModules(InformationRow, styles);
