import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from 'store/index';
import { setInitialStyles } from 'actions/index';
import Home from 'components/home';
import About from 'components/about';
import Activities from 'components/activities';
import SignIn from 'components/signIn';
import Navbar from 'components/navbar';
import Subscribe from 'components/subscribe';
import Footer from 'components/footer';

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
          <Route path="/signin" component={SignIn} />
          <Subscribe />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const ConnectedApp = connect(null, { setInitialStyles })(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
