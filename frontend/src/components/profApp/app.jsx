import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import axios from "axios"
import Cookies from 'universal-cookie';
import LeftBarr from './leftbarr'
import withAuth from '../withAuth';

// import onglets
import CreerSession from './onglets/CreerSession'
import VosSessions from './onglets/VosSessions'
import VosStatistiques from './onglets/VosStatistiques'

// import style 
import './app_prof.css'

class ProfApp extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)
        this.state = {
 
        }
      }

    render() {
      return (
          <Router >
                    {/* On affiche le pannel de contrôle des professeur avec les différentes fonction, avec lesquelles ils peuvent intérargir */}
            <div className="app_prof">
              <LeftBarr/>
              <Switch>
                <Route path="/appProf/vos_sessions" component={withAuth(VosSessions)}></Route>
                <Route path="/appProf/creer_session" component={withAuth(CreerSession)}></Route>
                <Route path="/appProf/vos_statistiques" component={withAuth(VosStatistiques)}></Route>
              </Switch>
            </div>
          </Router>
      );
    }
  }


  
  export default ProfApp;
  