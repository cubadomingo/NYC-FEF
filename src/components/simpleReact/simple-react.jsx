import React, { Component } from 'react';
import styles from './simple-react.scss';

export default class NameBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Stranger' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center" >
          <h1>
            {`Hey there ${this.state.value} you're up and running with
            React, Redux, Webpack + more.`}
          </h1>
          <h5>
            {'Where are my manners? I didn\'t even ask for your name!'}
          </h5>
          <input
            className={`form-control ${styles.inputWidth}`}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
