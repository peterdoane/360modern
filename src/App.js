import React, { Component } from 'react';
import './App.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import FeaturedHomes from './pages/FeaturedHomes';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
       <Route path="/" component={MainLayout}>
         <IndexRoute component={HomePage} />
         <Route path="featured-homes" component={FeaturedHomes} />
       </Route>
     </Router>
    );
  }
}


export default App;
