import React, { Component } from 'react';
import axios from "axios"
import Cookies from 'universal-cookie';
import LeftBarr from './leftbarr'

class ProfApp extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)
        this.state = {

        }
      }

    render() {
      return (
        <div>
            <LeftBarr/>
        </div>
      );
    }
  }


  
  export default ProfApp;
  