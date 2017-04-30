import React from 'react';
import { Link } from 'react-router-dom';

const ActivitiesNavbar = () => (
  <div className="container-fluid text-center">
    <span>
      <Link to="/activities/events">Events</Link>
      <Link to="/activities/scholarships">Scholarships</Link>
      <Link to="/activities/initiatives">Initiatives</Link>
      <Link to="/activities/fundraisers">Fundraisers</Link>
    </span>
  </div>
);

export default ActivitiesNavbar;
