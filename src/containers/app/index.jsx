import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../components/home/index';
import About from '../../components/about/index'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'

export default class App extends React.Component {
  componentDidMount() {
    const html = document.documentElement.style
    html.minHeight = '100%';
    html.position = 'relative';
    html.paddingTop= '80px';
    html.paddingBottom = '160px';
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
