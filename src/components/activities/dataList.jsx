import React from 'react';
import { Link } from 'react-router-dom';

const Activity = props => (
  <div
    className="container"
    role="button"
    onClick={() => props.toggleSection(!props.show)}
  >
    <div>
      <h1 className="text-center">{props.name}</h1>
    </div>
    { props.show ? (
      <div>
        { props.data.map(x =>
          <div key={x.title}>
            <h4>{x.title}</h4>
            <p>{x.body}</p>
          </div>,
        ) }
        <Link to={props.name.toLowerCase()}>View all {props.name}</Link>
      </div>
    ) : null }
  </div>
);

export default Activity;
