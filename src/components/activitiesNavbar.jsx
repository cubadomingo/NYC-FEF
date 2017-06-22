import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container-fluid text-center">
    <span>
      <Link to="/activities/events">Events</Link>
      <Link to="/activities/scholarships">Scholarships</Link>
    </span>
  </div>
);

export default Navbar;
