import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom";
import './onglets.css'
import './VosSessions.css'

class VosSessions extends Component {
    constructor(props){
        super(props)
        this.state = {
          list_sessions:[]
        }
      }
      componentDidMount(){
        const cookies = new Cookies()
        axios.post(process.env.REACT_APP_URL + '/view_sessions',{
          token:cookies.get('token')
        })          
        .then( res => {
          const {data,status} = res
          if(status === 200){
            console.log(data)
            this.setState({list_sessions:data})

          } else {
            console.log("erreur")
          }
        })
        .catch( err => console.log(err))
      }
    render() {
      const list_sessions = this.state.list_sessions
      return (
        <div class="app_body">
          <div className='view_session_container'>
            {list_sessions.map(session => (
              <div className='session'>
                <div className="session_head">
                  <p className='titre_session'>{session.nom}</p>
                  <button>Delete</button>
                </div>
                <div className='session_eleves'>
                  {session.eleve.map(eleve=> (
                    <li className='eleve'>{Object.keys(eleve.eleve)[0]}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

export default VosSessions;
  