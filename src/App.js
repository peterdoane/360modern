import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LogoHeader from './LogoHeader'
import ImageGallery from 'react-image-gallery';
import Section from './Section';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
       <Route path="/" component={MainLayout}>
         <IndexRoute component={HomePage} />
       </Route>
     </Router>
    );
  }
}


export default App;
