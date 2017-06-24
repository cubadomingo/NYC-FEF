import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from 'store/index';
import { setInitialStyles, checkToken } from 'utils';
import Home from 'components/home';
import About from 'components/about';
import Activities from 'components/activities';
import SignIn from 'components/signIn';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

const store = configureStore();

export class App extends React.Component {
  componentWillMount() {
    setInitialStyles();
    checkToken(store);
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
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
