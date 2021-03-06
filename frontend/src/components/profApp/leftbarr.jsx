import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
          {/* Menu avec les différent fonction aevc les quel les professeurs peuvent s'y rendre */}
            <img className='leftbarr-logo' src={Logo} />
            <Link to='/appProf/vos_sessions' className='onglet'>
              Vos sessions
            </Link>
            <Link to='/appProf/creer_session' className='onglet'>
              Creer session
            </Link>
            <Link to='/appProf/vos_statistiques' className='onglet'>
              Vos Statistique
            </Link>
        </div>
      );
    }
  }

  export default ProfApp;
  