import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar/navbar'
import HomePage from './components/homePage/homePage';
import WomensTees from './components/womens-tees/womens-tees';
import SingleView from './components/singleitemview/SingleView';
import WomensSweatshirts from './components/Womens-Sweatshirts/Womens-Sweatshirts';
import MensTees from './components/mens-tees'
import Searchbar from './components/searchbar/searchbar';
import Cart from './components/Cart/Cart';
import Footer from './components/footer/footer'
import {HashRouter,Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar/>
        <Navbar/>
      
        <HashRouter>
          <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path="/collections/womens-tees/products/:slug" component={SingleView}/>
          <Route path="/collections/womens-sweatshirts" component={WomensSweatshirts}/>
          <Route path="/collections/womens-tees" component={WomensTees}/>
          <Route path="/collections/mens-tees" component={MensTees}/>

          <Route path="/Cart" component={Cart}/>
          
          </Switch>
          
        </HashRouter>
        <Footer/>

      </div>
    );
  }
}

export default App;
