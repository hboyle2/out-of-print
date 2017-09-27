import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar/navbar'
import HomePage from './components/homePage/homePage';
import WomensTees from './components/womens-tees/womens-tees';
import SingleView from './components/singleitemview/SingleView';
import {HashRouter,Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      
        <HashRouter>
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path="/collections/womens-tees/products/:barbara" component={SingleView}/>
          <Route path="/collections/womens-tees" component={WomensTees}/>
          
          </Switch>
          
        </HashRouter>

      </div>
    );
  }
}

export default App;
