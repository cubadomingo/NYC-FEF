import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

const Navbar = () => (
  <nav styleName="navbar" className="navbar navbar-toggleable-md fixed-top
    navbar-light">
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button">
      <span className="navbar-toggler-icon"></span>
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
            to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            styleName="nav-link-margin"
            className="nav-link"
            to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <a styleName="nav-link-margin" className="nav-link" href="#">Activities</a>
        </li>
        <li className="nav-item">
          <a styleName="nav-link-margin" className="nav-link" href="#">Get Involved</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <span styleName="navbar-button" className="btn btn-secondary">Donate</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default CSSModules(Navbar, styles);
