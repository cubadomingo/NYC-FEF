import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from 'reducers/authentication';
import {
  signOut,
} from 'actions/index';
import styles from 'styles/navbar.scss';

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleNavbar: false,
    };
  }

  toggleNavbar() {
    this.setState({
      toggleNavbar: !this.state.toggleNavbar,
    });
  }

  render() {
    return (
      <nav
        styleName="navbar"
        className="navbar navbar-toggleable-md fixed-top navbar-light"
      >
        <button
          onClick={() => { this.toggleNavbar(); }}
          className="navbar-toggler navbar-toggler-right"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link
          onClick={() => { this.toggleNavbar(); }}
          className="navbar-brand"
          to="/"
        >
          Financial Empowerement Foundation
        </Link>
        <div
          className={this.state.toggleNavbar ? '' : 'collapse navbar-collapse'}
          styleName="navbar-menu"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                onClick={() => { this.toggleNavbar(); }}
                styleName="nav-link-margin"
                className="nav-link"
                to="/"
              >Home</Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => { this.toggleNavbar(); }}
                styleName="nav-link-margin"
                className="nav-link"
                to="/about"
              >About Us</Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => { this.toggleNavbar(); }}
                styleName="nav-link-margin"
                className="nav-link"
                to="/activities"
              >Activities</Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => { this.toggleNavbar(); }}
                styleName="nav-link-margin"
                className="nav-link"
                to="/get-involved"
              >Get Involved</Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => { this.toggleNavbar(); }}
                className="nav-link" to="/donate"
              >
                <span className="btn btn-primary">
                  Donate
                </span>
              </Link>
            </li>
            { this.props.authenticated ? (
              <li className="nav-item">
                <a className="nav-link" href="/" id="signout" onClick={() => this.props.signOut()}>
                  <span styleName="sign-out-button" className="btn btn-secondary">
                    Sign Out
                  </span>
                </a>
              </li>
            ) : null }
          </ul>
        </div>
      </nav>
    );
  }
}

const styledComponent = CSSModules(Navbar, styles);

export default connect(mapStateToProps, { signOut })(styledComponent);
