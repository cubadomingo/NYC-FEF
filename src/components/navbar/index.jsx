import React from 'react';
import styles from './navbar.scss';
import CSSModules from 'react-css-modules';

const Navbar = () => (
  <nav styleName="navbar" className="navbar navbar-toggleable-md fixed-top
    navbar-light">
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Financial Empowerment Foundation</a>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a styleName="nav-link-margin" className="nav-link" href="#">About Us</a>
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
