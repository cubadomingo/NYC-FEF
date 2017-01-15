import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div>
    <nav className="navbar navbar-toggleable-sm navbar-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">Simple React</Link>
          </li>
          <li className="nav-item">
            <Link to={'/test-router'} className="nav-link">React + Redux</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
