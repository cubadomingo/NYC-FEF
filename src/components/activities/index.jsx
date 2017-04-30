import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataList from './dataList';

const Index = (props) => {
  const name = props.name;
  console.log(props);

  const activity = () => {
    switch (name) {
      case 'events':
        return props.activities.events;
      case 'initiatives':
        return props.activities.events;
      case 'scholarships':
        return props.activities.events;
      case 'fundraisers':
        return props.activities.events;
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>Here is a list of {name}</p>
      <DataList data={activity()} />
      <Link to={`${props.match.url}/new`}>New {name}</Link>
    </div>
  );
};

const mapStateToProps = state => (
  {
    activities: state.activity,
  }
);

export default connect(mapStateToProps)(Index);
