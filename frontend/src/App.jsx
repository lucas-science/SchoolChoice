import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import Home from './components/home';
import error404 from './components/error404';
import connection from './components/creer_compte';
import './App.css';
import withAuth from './components/withAuth'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={withAuth(Home)}></Route>
            <Route path="/connection" component={connection}></Route>
            <Route component={error404}/>
            <Route path="/error404" exact component={error404}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
