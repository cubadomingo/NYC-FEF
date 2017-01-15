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
      <div>
        <div className={styles.image} />
        <div className={styles.backgroundColor}>
          <div className={`container ${styles.container}`}>
            <div className="text-center" >
              <h1 className={styles.textShadow}>
                {`Hey there ${this.state.value} you're up and running!`}
              </h1>
              <h5 className={styles.textShadow}>
                {'Where are my manners? I didn\'t even ask for your name!'}
              </h5>
              <input
                className={`form-control ${styles.inputWidth}`}
                type="text"
                placeholder="Enter your name"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <p>
                This page is a simple example of basic react functionality.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
