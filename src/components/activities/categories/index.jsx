import React from 'react';
import { Link } from 'react-router-dom';

const Index = props => (
  <div className="text-center">
    <p>INDEX ROUTE</p>
    <Link to={`${props.match.url}/new`}>New</Link>
  </div>
);

export default Index;
