import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'

class Home extends Component {
    // différente route renvoyant un composant react
    render() {
      return (
        <div className='main'>
            <Link to='/app'>
              APP
            </Link>
            <Link to='/appProf'>
              APP PROF
            </Link>
            <Link to='/create_account'>
              creer compte
            </Link>
            <Link to='/connexion_account'>
              connexion compte
            </Link>
        </div>
      );
    }
  }
  
  export default Home;
  