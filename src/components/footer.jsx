import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from 'styles/footer.scss';

const Footer = () => (
  <footer className="container text-center" styleName="footer">
    <div className="row">
      <div className="col-12 col-md-3" styleName="brand">
        <h4>
          Financial
        </h4>
        <h4>
          Empowerment
        </h4>
        <h4>
          Foundation
        </h4>
        <p>New York City, NY</p>
      </div>
      <div className="col-4 col-md-3">
        <h6 className="text-center">
          <Link to="/about">About Us</Link>
        </h6>
        <ul>
          <li>
            Mission
          </li>
          <li>
            FAQ
          </li>
        </ul>
      </div>
      <div className="col-4 col-md-3">
        <h6 className="text-center">
          <Link to="/get-involved">Get Involved</Link>
        </h6>
        <ul>
          <li>
            Donate
          </li>
          <li>
            Volunteer
          </li>
        </ul>
      </div>
      <div className="col-4 col-md-3">
        <h6 className="text-center">
          <Link to="/activities">Activities</Link>
        </h6>
        <ul>
          <li>
            Events
          </li>
          <li>
            Scholarships
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default CSSModules(Footer, styles);
