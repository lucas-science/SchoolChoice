import React, { Component } from 'react';
import axios from "axios"
import Cookies from 'universal-cookie';
import './creer_compte.css'
import {Link} from 'react-router-dom'

class CreerCompte extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)

        this.state = {
            email: '',
            mdp:'',
            nom:'',
            prenom:'',
            error_message:''
        }
    }
   sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   DisplayMessageFewTime =  (Time, StateToChange, ValueAfter, ValueBefore) => {
     return new Promise(async resolve => {
        this.setState({[StateToChange]:ValueAfter})
        await this.sleep(Time)
        this.setState({[StateToChange]:ValueBefore})
        resolve()
     })
   }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
    
    Submit = (event) => {
        event.preventDefault();
        console.log("state", this.state)
        axios.post(process.env.REACT_APP_URL+'/create_account',{
          email:this.state.email,
          nom:this.state.nom,
          prenom:this.state.prenom,
          mdp:this.state.mdp
        }).then(async res => {
          const {data, status} = res
          if (status === 200){
            const cookies = new Cookies();
 
            cookies.set('token', data.token, { path: '/' });
            this.props.history.push('/app/friendlist');
          } else {
            await this.DisplayMessageFewTime(2000, "error_message", data.message, "")
          }
        })
        .catch(err => console.log(err))

    }

    render() {
      return (
        <div className='creer-compte-main'>
          <div className='creer-compte-box'>
            <div className='creer-compte-box-gauche'>
          <form onSubmit={this.Submit}>{/* Le formulaire pour se créer un compte */}
              <div className='creer-compte-box-input'>
                <p className='creercompte-texte-gauche'>Create Account</p>
              <input 
                  className='creer-compte-input'
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input 
                  className='creer-compte-input'
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  value={this.state.nom}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
                  className='creer-compte-input'
                  type="text"
                  name="prenom"
                  placeholder="Prenom"
                  value={this.state.prenom}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
              className='creer-compte-input'
                  type="password"
                  name="mdp"
                  placeholder="Mot de passe"
                  value={this.state.mdp}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input className='creercompte-bouton-gauche' type="submit" value="Creer compte"/>
              </div>
          </form>
          <p>{this.state.error_message}</p>
          </div>
          <div className='creer-compte-box-droite'>
            <div className='creer-compte-textebox-droite'>
              <p className='creer-compte-texte1-droite'>Welcome back </p>
              <p className='creer-compte-texte2-droite'>Si tu as déjà un compte, il te suffit de te connecter !</p>
              <button className='creer-compte-boutton-droite'>
                
              <Link className='creer-compte-boutton-droite'to='/connexion_account'>
							  se connecter
            	</Link></button>
              </div>
          </div>
          </div>
        </div>
      );
    }
  }


  
  export default CreerCompte;
  