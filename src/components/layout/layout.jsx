import React from 'react';
import { Link } from 'react-router';

const ReactRedux = props => (
  <div>
    <nav className="navbar navbar-toggleable-sm navbar-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">Simple React</Link>
          </li>
          <li className="nav-item">
            <Link to={'/react-redux'} className="nav-link">React + Redux</Link>
          </li>
        </ul>
      </div>
    </nav>
    {props.children}
  </div>
);

ReactRedux.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default ReactRedux;
