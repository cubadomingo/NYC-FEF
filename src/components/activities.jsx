import React from 'react';
import CSSModules from 'react-css-modules';
import Initiatives from '../containers/initiatives';
import Scholarships from '../containers/scholarships';
import Events from '../containers/events';
import Fundraisers from '../containers/fundraisers';
import style from './activities.scss';


const Activities = () => (
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
    <Initiatives />
    <Scholarships />
    <Events />
    <Fundraisers />
  </div>
);

export default CSSModules(Activities, style);
