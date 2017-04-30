import React from 'react';

const CategoryShow = ({ match }) => (
  <h1 className="text-center">
    SHOW ROUTE PARAM: {match.params.id}
  </h1>
);

export default CategoryShow;
