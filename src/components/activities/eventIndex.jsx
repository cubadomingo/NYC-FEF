import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndex = props => (
  <div className="text-center">
    <p>INDEX ROUTE</p>
    <Link to={`${props.match.url}/new`}>New</Link>
  </div>
);

export default CategoryIndex;
