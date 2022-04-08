import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import './onglets.css'

class VosStatistiques extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
      }
    // différente route renvoyant un composant reac
    render() {
      return (
        <div class="app_body">
            <p>
                Statistiques
            </p>
        </div>
      );
    }
  }

export default VosStatistiques;
  