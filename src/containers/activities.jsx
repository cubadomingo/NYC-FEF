import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Activity from '../components/activity';
import style from './activities.scss';
import * as actions from '../actions/index';
import { mapStateToProps } from '../reducers/activity';

/* eslint-disable */
export class Activities extends Component {
  componentDidMount() {
    const {
      fetchEvents,
      fetchInitiatives,
      fetchFundraisers,
      fetchScholarships,
    } = this.props;

    fetchEvents();
    fetchInitiatives();
    fetchFundraisers();
    fetchScholarships();
  }

  render() {
    const {
      scholarships,
      initiatives,
      events,
      fundraisers,
      toggleInitiatives,
      toggleEvents,
      toggleScholarships,
      toggleFundraisers,
    } = this.props;

    return (
      <div>
        <div className="container" styleName="activities">
          <h1 className="text-center">Activities</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor
            tortor, elementum ut vehicula eget, viverra tempus sem. Morbi viverra
            ante viverra est viverra condimentum. Integer sodales volutpat elit,
            quis condimentum felis sodales id. Cras non suscipit sem. Cras eget
            tempus elit. Cras ex massa, ullamcorper ac accumsan ut, sagittis quis
            massa. Aenean porta ligula sit amet erat scelerisque eleifend. Ut sit
            amet tincidunt dolor. Etiam efficitur auctor nisl. Proin vitae
            venenatis purus, sit amet mollis arcu. Nullam at purus rutrum,
            venenatis ante sed, ornare nisl. Pellentesque condimentum tristique
            ligula, quis pharetra leo vehicula et.
          </p>
        </div>
        <Activity
          name="Initiatives"
          data={initiatives.data}
          show={initiatives.show}
          toggleSection={toggleInitiatives}
        />
        <Activity
          name="Events"
          data={events.data}
          show={events.show}
          toggleSection={toggleEvents}
        />
        <Activity
          name="Scholarships"
          data={scholarships.data}
          show={scholarships.show}
          toggleSection={toggleScholarships}
        />
        <Activity
          name="Fundraisers"
          data={fundraisers.data}
          show={fundraisers.show}
          toggleSection={toggleFundraisers}
        />
      </div>
    );
  }
}

export const StyledActivities = CSSModules(Activities, style);

export default connect(mapStateToProps, actions)(StyledActivities);
