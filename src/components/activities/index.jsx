import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.scss';
import Category from '../../containers/category/index';

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
    <Category title="Initiatives" />
    <Category title="Scholarships" />
    <Category title="Events" />
    <Category title="Fundraisers" />
  </div>
);

export default CSSModules(Activities, style);
