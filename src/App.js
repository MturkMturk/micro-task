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
              <Route exact path='/two' component={Two} />
              <Route exact path='/three' component={Three} />
              <Route exact path='/four' component={Four} />
              <Route exact path='/five' component={Five} />
              <Route exact path='/six' component={Six} />
              <Route exact path='/seven' component={Seven} />
              <Route exact path='/eight' component={Eight} />
              <Route exact path='/nine' component={Nine} />
              <Route exact path='/ten' component={Ten} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;