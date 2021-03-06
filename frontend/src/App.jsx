import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";

import Home from './components/home';
import error404 from './components/error404';
import CreerCompte from './components/creer_compte';
import ConnexionAccount from './components/connexion'

import ProfApp from './components/profApp/app';

import EleveApp from './components/App/app';
import AppSpe from './components/App/appSpe';
import AppSpeGeneral from './components/App/appSpegeneral';
import AppspeSTI2D from './components/App/appspeSTI2D'

import EleveAppAvecLien from './components/AppAvecLien/app'
import AppSpeAvecLien from './components/AppAvecLien/appSpe'
import AppSpeGeneralAvecLien from './components/AppAvecLien/appSpegeneral'
import AppspeSTI2DAvecLien from './components/AppAvecLien/appspeSTI2D'


import './App.css'; 
import withAuth from './components/withAuth';


/**
 * Switch avec chaque route lié à un components
 */
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>

            <Route path="/app" exact component={EleveApp}></Route>
            <Route path="/appSpe" exact component={AppSpe}></Route>
            <Route path="/appSpeGeneral" exact component={AppSpeGeneral}></Route>
            <Route path="/appSpeSTI2D" exact component={AppspeSTI2D}></Route>


            <Route path="/app/:id" component={EleveAppAvecLien}></Route>
            <Route path="/appSpe/:id" component={AppSpeAvecLien}></Route>
            <Route path="/appSpeGeneral/:id" component={AppSpeGeneralAvecLien}></Route>
            <Route path="/appSpeSTI2D/:id" component={AppspeSTI2DAvecLien}></Route>
          

            <Route path="/appProf" component={withAuth(ProfApp)}></Route>
            <Route path="/create_account" component={CreerCompte}></Route>
            <Route path="/connexion_account" component={ConnexionAccount}></Route>
            <Route path="/error404" exact component={error404}></Route>
            <Route component={error404}/>
          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;
