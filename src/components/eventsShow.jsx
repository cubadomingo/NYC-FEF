import React from 'react';

const EventsShow = ({ match }) => (
  <h1 className="text-center">
    {console.log(match)}
    SHOW ROUTE PARAM: {match.params.id}
  </h1>
);

export default EventsShow;
