import React from 'react';
import { connect, Provider } from 'react-redux';
import configureStore from '../store/index';
import { setInitialStyles } from '../actions/index';
import Routes from '../routes/index';

const store = configureStore();

export class App extends React.Component {
  componentDidMount() {
    this.props.setInitialStyles();
  }

  render() {
    return (
      <Routes />
    );
  }
}

const ConnectedApp = connect(null, { setInitialStyles })(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
