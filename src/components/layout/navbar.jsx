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
            <Link to={'/'} className="navbar-brand">Financial Empowerment Foundation</Link>

            <button
              onClick={this.toggleMenu}
              className="navbar-toggler navbar-toggler-right"
            ><span className="navbar-toggler-icon" /></button>
          </div>

          <div className={menuClass}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={'/'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >Home</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/events'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >Events</Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/blog'}
                  onClick={this.toggleMenu}
                  className="nav-link"
                >Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
