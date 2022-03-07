import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import Home from './components/home';
import error404 from './components/error404';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/lol" exact component={Home}></Route>
            <Route component={error404}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
