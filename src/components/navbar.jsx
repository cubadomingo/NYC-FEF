import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

const Navbar = () => (
  <nav
    styleName="navbar"
    className="navbar navbar-toggleable-md fixed-top navbar-light"
  >
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">
      Financial Empowerement Foundation
    </Link>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            styleName="nav-link-margin"
            className="nav-link"
            to="/"
          >Home</Link>
        </li>
        <li className="nav-item">
          <Link
            styleName="nav-link-margin"
            className="nav-link"
            to="/about"
          >About Us</Link>
        </li>
        <li className="nav-item">
          <Link
            styleName="nav-link-margin"
            className="nav-link"
            to="/activities"
          >Activities</Link>
        </li>
        <li className="nav-item">
          <Link
            styleName="nav-link-margin"
            className="nav-link"
            to="/get-involved"
          >Get Involved</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/donate">
            <span styleName="navbar-button" className="btn btn-secondary">
              Donate
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default CSSModules(Navbar, styles);
