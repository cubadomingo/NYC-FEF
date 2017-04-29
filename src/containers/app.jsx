import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from '../store/index';
import Home from '../components/home';
import About from '../components/about';
import Activities from '../containers/activities';
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    const html = document.documentElement.style;
    html.minHeight = '100%';
    html.position = 'relative';
    html.paddingTop = '80px';
    html.paddingBottom = '302px';
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
