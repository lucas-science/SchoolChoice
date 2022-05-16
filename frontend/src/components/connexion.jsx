import React, { Component } from 'react';
import axios from "axios"
import Cookies from 'universal-cookie';
import './connexion.css'
import {Link} from 'react-router-dom'

class ConnexionAccount extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)

        this.state = {
            email: '',
            mdp:'',
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
        axios.post('http://localhost:4000/connexion',{
          email:this.state.email,
          mdp:this.state.mdp
        }).then(async res => {
          const {data, status} = res
          if (status === 200){
            const cookies = new Cookies();
 
            cookies.set('token', data.token, { path: '/' });
            this.props.history.push('/');
          } else {
            await this.DisplayMessageFewTime(2000, "error_message", data.message, "")
          }
        })
        .catch(err => console.log(err))
    }

    render() {
      return (
          <div className='connexion-main'>
          <div className='connexion-box'>

          <div className='connexion-gauche'>
            <div className='connexion-textebox-gauche'>
              <p className='connexion-texte1-gauche'>Hey</p>
              <p className='connexion-texte2-gauche'>Si tu n’as pas encore de compte crée en un ! </p>
              <button className='connexion-boutton-gauche'>
                
              <Link className='connexion-boutton-gauche'to='/create_account'>
              créer un compte
            	</Link></button>
            </div>
            </div>


            <div className='connexion-box-droite'>
          <form onSubmit={this.Submit}>{/* Le formulaire pour se créer un compte */}
          <div className='connexion-box-input'>
                <p className='connexion-texte-droite'>Login</p>
              <input
                className='connexion-input'
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
              className='connexion-input'
                  type="password"
                  name="mdp"
                  placeholder="Mot de passe"
                  value={this.state.mdp}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input className='connexion-bouton-droite'type="submit" value="Connexion"/>
              </div>
          </form>
          <p>{this.state.error_message}</p>
          
          </div>
          </div>
        </div>
      );
    }
  }


  
  export default ConnexionAccount;
  