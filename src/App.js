import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/cart" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/:category?" component={HomeScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
