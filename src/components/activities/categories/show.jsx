import React from 'react';

const Show = ({ match }) => (
  <h1>Show Route for resource number {match.params.id}</h1>
);

export default Show;
