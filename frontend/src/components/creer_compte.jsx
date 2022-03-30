import React, { Component } from 'react';
import axios from "axios"
import Cookies from 'universal-cookie';


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
        axios.post('http://localhost:4000/create_account',{
          email:this.state.email,
          nom:this.state.nom,
          prenom:this.state.prenom,
          mdp:this.state.mdp
        }).then(async res => {
          const {data, status} = res
          if (status === 200){
            console.log("dzadadzatat")
            const cookies = new Cookies();
 
            cookies.set('token', data.token, { path: '/' });
            console.log(cookies.get('token'));
          } else {
            await this.DisplayMessageFewTime(2000, "error_message", data.message, "")
          }
        })
        .catch(err => console.log(err))

    }

    render() {
      return (
        <div>
          <form onSubmit={this.Submit}>{/* Le formulaire pour se créer un compte */}
              <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
                  type="text"
                  name="nom"
                  placeholder="nom"
                  value={this.state.nom}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
                  type="text"
                  name="prenom"
                  placeholder="prenom"
                  value={this.state.prenom}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input
                  type="password"
                  name="mdp"
                  placeholder="Mot de passe"
                  value={this.state.mdp}
                  onChange={this.handleInputChange}
                  required
              />
              <br/>
              <input type="submit" value="Creer compte"/>
          </form>
          <p>{this.state.error_message}</p>
        </div>
      );
    }
  }


  
  export default CreerCompte;
  