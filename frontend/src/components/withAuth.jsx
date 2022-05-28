import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios"
import Cookies from 'universal-cookie';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    // création du state "loading" et "redirect"
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    // fait une requête POST au chemin "http://XXXXXX/auth" pour vérifier si les cookie sont valide
    componentDidMount() {
        const cookies = new Cookies();
        const token = cookies.get('token')
        axios.post(process.env.REACT_APP_URL+'/auth',{
            token: token  
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
            // si les cookies sont valide
              console.log("les cookie sont la ")
              this.setState({ loading: false });// on autorise l'utilisateur à se rendre sur la partie de l'application qui lui est réservé
            } else {
              const error = new Error(res.error); 
              throw error;
            }
        })
        .catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });

    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      // si redirect est TRUE renvoyer vers la page de connexion
      if (redirect) {
        return <Redirect to="/connexion_account" />;
      }
      // si redirect est FALSE renvoyer le composant voulu
      return <ComponentToProtect {...this.props} />;
    }
  }
}