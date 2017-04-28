import React from 'react';

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
      </div>
    ) : null }
  </div>
);

export default Activity;
