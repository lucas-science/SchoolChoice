import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import Home from './components/home';
import error404 from './components/error404';
import CreerCompte from './components/creer_compte';
import ConnexionAccount from './components/connexion'
import ProfApp from './components/profApp/app';


import './App.css';
import withAuth from './components/withAuth'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/app" exact component={withAuth(ProfApp)}></Route>
            <Route path="/create_account" component={CreerCompte}></Route>
            <Route path="/connexion_account" component={ConnexionAccount}></Route>
            <Route component={error404}/>
            <Route path="/error404" exact component={error404}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
