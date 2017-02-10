import React from 'react';
// import { Link } from 'react-router';
import styles from './footer.scss';

const Footer = () => (
  <footer className={`${styles.footer} container text-center`}>
    <div className="row">
      <div className={`${styles.brand} col-md-3`}>
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
      <div className="col-md-3">
        <h6 className="text-center">About Us</h6>
        <ul>
          <li>
            Mission
          </li>
          <li>
            Vision
          </li>
          <li>
            FAQ
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h6 className="text-center">Get Involved</h6>
        <ul>
          <li>
            Donate
          </li>
          <li>
            Volunteer
          </li>
          <li>
            Newsletter
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h6 className="text-center">Activities</h6>
        <ul>
          <li>
            Events
          </li>
          <li>
            Scholarships
          </li>
          <li>
            Fundraisers
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer;
