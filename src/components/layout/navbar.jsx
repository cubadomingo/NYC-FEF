import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './navbar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    const menuClass = this.state.isMenuOpen ? '' : 'collapse navbar-collapse justify-content-end';

    return (
      <div className="container">
        <nav className={`${styles.navbar} navbar fixed-top navbar-toggleable-sm navbar-light justify-content-end`}>

          <div className="mr-auto">
            <Link
              to={'/'}
              className={`${styles.navbarText} navbar-brand`}
            >
              Financial Empowerment Foundation
            </Link>
            <button
              onClick={this.toggleMenu}
              className="navbar-toggler navbar-toggler-right"
            > <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className={menuClass}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={'/'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >About Us</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/events'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >Activities</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/events'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >Get Involved</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/donate'}
                  onClick={this.toggleMenu}
                  className={`nav-link ${styles.buttonDonate} btn btn-outline-primary`}
                >Donate</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/volunteer'}
                  onClick={this.toggleMenu}
                  className={`nav-link ${styles.buttonVolunteer} btn btn-primary`}
                >Volunteer</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
