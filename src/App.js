import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import One from './One'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/one' component={One} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;