import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import logo from './App/image/logo.png'
import cartebleu from './App/image/cartebleuhome.png'
import carteorange from './App/image/carteorangehome.png'

class Home extends Component {
    // différente route renvoyant un composant react
    render() {
      return (
        <div className='main-home'>
          <div className='navbarrehome'>
            <div className='logo-home-box'>
              <Link to='/'>
						  <img className='logo-home' src={logo} alt="logo" />
						  </Link>
            </div>
            <div className='lien-home-box'>
              <Link className='lien-home' to='/app'>
                APP
              </Link>
              <Link  className='lien-home' to='/appProf/vos_sessions'>
                APP PROF
              </Link>
              <Link className='lien-home' to='/create_account'>
                creer compte
              </Link>
              <Link className='lien-home' to='/connexion_account'>
                connexion compte
              </Link>
            </div>
          </div>
          <img className='carte-bleu-home' src={cartebleu} alt="cartebleu" />
          <img className='carte-orange-home' src={carteorange} alt="carteorange" />
          <div className='home-texte-box'>
            <p className='home-texte1'>Bienvenue sur School Choice.</p>
            <p className='home-texte2'>l'appli qui va changer ta vie</p>
          </div>
            
        </div>
      );
    }
  }
  
  export default Home;
  