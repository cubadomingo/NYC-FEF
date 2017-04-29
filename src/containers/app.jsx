import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from '../store/index';
import Home from '../components/home';
import About from '../components/about';
import Activities from '../containers/activities';
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';
import { setInitialStyles } from '../actions/index';

const store = configureStore();

export class App extends React.Component {
  componentDidMount() {
    this.props.setInitialStyles();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/activities" component={Activities} />
          <Subscribe />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const ConnectedApp = connect(null, { setInitialStyles })(App);

const ProvidedApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default ProvidedApp;
