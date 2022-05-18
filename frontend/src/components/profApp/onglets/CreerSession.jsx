import React, { Component } from 'react';
import './onglets.css'
import './CreerSession.css'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CreerSession extends Component {
    constructor(props){
        super(props)
        this.state = {
          list_eleve:[],
          eleve:'',
          changed:false,
          SessionName:'',
          NombreEleve:0,
          formulaire_error_message:'',
          create:false,
          session_id:'',
          elevesMdp:[],
          FinalEleve:[]
        }
      }

    componentDidMount(){
      this.setState({changed:true})

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

      addName = (event) => {
        event.preventDefault();
        if(this.state.eleve){
          this.state.list_eleve.push(this.state.eleve)
          this.setState({eleve:''})
          console.log(this.state.list_eleve)
        }
      }

      deleteName = (event) => {
        event.preventDefault();
        const index = event.target.key
        const NameRemoved = this.state.list_eleve.splice(index, 1)
        console.log(this.state.list_eleve)
        this.setState({changed:true})
      }

      isValidForm = (list_eleve, SessionName, NombreEleve) => {
        if(list_eleve != [] && SessionName != "" && NombreEleve > 0 && Number(NombreEleve) == list_eleve.length){
          return true
        } else{
          return false
        }
      }

      SubmitForm = async (event) => {
        event.preventDefault();
        const {list_eleve,SessionName,NombreEleve} = this.state
        console.log(list_eleve,SessionName,NombreEleve)
        const response = this.isValidForm(list_eleve,SessionName,NombreEleve)

        if(!response){
          await this.DisplayMessageFewTime(1000,'formulaire_error_message','Veuillez remplir le formulaire correctement','' )
        } else {
          console.log(cookies.get('token'))
          axios.post('http://localhost:4000/create_session',{
            nom_session:this.state.SessionName,
            eleves:this.state.list_eleve,
            token:cookies.get('token')
          })
          .then( res => {
            const {data,status} = res
            if(status === 200){
              console.log(data)
              this.setState({create:true})
              this.setState({session_id:data.id_session})
              this.setState({elevesMdp:data.listEleve})
             
            } else {
              console.log("erreur")
            }
          })
          .catch( err => console.log(err))
        }

        this.setState({list_eleve:[]})
        this.setState({SessionName:''})
        this.setState({NombreEleve:0})
      }

      
    // différente route renvoyant un composant reac
    render() {
      const {changed} = this.state
      const Created = this.state.create



      let ListEleve;
      
      if(changed){
        ListEleve = this.state.list_eleve.map((eleve, index)=> 
          <div className="creer_student" key={index}>
            <p>{eleve}</p>
            <input type="submit"  value="delete" onClick={this.deleteName} key={index}/>
          </div>
        )
        this.setState({changed:false})
      } else{
        ListEleve = this.state.list_eleve.map((eleve, index)=> 
          <div className="creer_student" key={index}>
            <p>{eleve}</p>
            <input type="submit"  value="delete" onClick={this.deleteName} key={index}/>
          </div>
        )
      }
      this.state.elevesMdp.map(e => Object.entries(e).map(([key,val]) => this.state.FinalEleve.push([key,val]) ))
      console.log(this.state.FinalEleve)
      return (
        <div className='app_body'>
          <div className="formulaire">
            { Created ?(
              <div className='session_created'>
                <p><u><b>Votre Nouvelle Session</b></u> : {'http://localhost:3000/app/'+this.state.session_id}</p>
                <table className='create-session-table'>
                  <tr>
                    <th>Nom</th>
                    <th>Mot de passe</th>
                  </tr>
                  {this.state.FinalEleve.map(([key,val])=> (
                    <tr>
                      <th>{key}</th>
                      <th>{val}</th>
                    </tr>
                  ))}
                </table>
              </div>
            ):(
                <>
                <div className="creer_top">
                  <div className="creer_part1">
                    <div className='creer_part1_a'>
                      <p>Nom de la Session</p>
                      <input className='creer_part1_input' name="SessionName" value={this.state.SessionName} onChange={this.handleInputChange} type="text" />
                    </div>
                    <div className='creer_part1_b'>
                      <p>Nombre d'elèves</p>
                      <input className='creer_part1_input' name="NombreEleve" value={this.state.NombreEleve} onChange={this.handleInputChange} type="number" />
                    </div>
                  </div>
                  <div className="creer_part2">
                    <p>Donnez la liste de vos élèves, afin de leur attribuer un identifiant.</p>
                    
                    <div className="creer_liste_eleves">
                      {ListEleve}
                    </div>

                    <div className='creer_form_add_eleve'>
                      <input type="text" name="eleve" onChange={this.handleInputChange} value={this.state.eleve} className='creer_textadd_eleve'/>
                      <input type="submit" className='creer_buttonadd_eleve' onClick={this.addName}/>
                    </div>
                  </div>
                </div>
                <div className="creer_bottom">
                  <input onClick={this.SubmitForm} className='creer_submit_button' type="submit" value="Creer la Session"/>
                  <p>{this.state.formulaire_error_message}</p>
                </div>
              </>
            )

            }

          </div>
        </div>
      );
    }
  }

export default CreerSession;
  