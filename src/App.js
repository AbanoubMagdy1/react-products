import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/:category?" component={HomeScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
