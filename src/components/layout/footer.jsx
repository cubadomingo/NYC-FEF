import React from 'react';
import { Link } from 'react-router';
import styles from './footer.scss';

const Footer = () => (
  <footer className={`${styles.footer} text-center`}>
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to={'/events'} className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to={'/blog'} className="nav-link">Blog</Link>
        </li>
      </ul>
      <p>© 2017 Financial Empowerment Foundation - Developed by Devin Osorio</p>
    </div>
  </footer>
)

export default Footer;
