import React, { Component } from 'react';
import axios from "axios"

class CreerCompte extends Component {
    // différente route renvoyant un composant react
    constructor(props){
        super(props)
        this.state = {
            email: '',
            mdp:'',
            nom:'',
            prenom:''
        }
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
        }).then(res => {
          const isError = res.data.errors
          console.log(res)
        })
        .catch(err => console.error(err))

    }

    render() {
      return (
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
      );
    }
  }


  
  export default CreerCompte;
  