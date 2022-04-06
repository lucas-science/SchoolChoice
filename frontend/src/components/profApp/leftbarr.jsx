import React, { Component } from 'react';
import axios from "axios"
import Cookies from 'universal-cookie';
import Logo from '../../image/logo.svg'
import './leftbarr.css'

class ProfApp extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)
        this.state = {

        }
      }

    render() {
      return (
        <div className='leftbarr'>
            <img className='logo' src={Logo} />
            <div className='onglet'>
              <p>Vos sessions</p>
            </div>
            <div className='onglet'>
              <p>Creer session</p>
            </div>
            <div className='onglet'>
              <p>Vos Statistique</p>
            </div>
        </div>
      );
    }
  }


  
  export default ProfApp;
  