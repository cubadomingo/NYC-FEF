import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from 'reducers/authentication';
import {
  signOut,
} from 'actions/index';
import styles from 'styles/navbar.scss';

const Navbar = props => (
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
        <li className="nav-item">
          <Link className="nav-link" to="/donate">
            <span styleName="navbar-button" className="btn btn-secondary">
              Donate
            </span>
          </Link>
        </li>
        { props.authenticated ? (
          <li className="nav-item">
            <a className="nav-link" id="signout" onClick={() => props.signOut()}>
              <span styleName="navbar-button" className="btn btn-secondary">
                Sign Out
              </span>
            </a>
          </li>
        ) : null }
      </ul>
    </div>
  </nav>
);

const styledComponent = CSSModules(Navbar, styles);

export default connect(mapStateToProps, { signOut })(styledComponent);
