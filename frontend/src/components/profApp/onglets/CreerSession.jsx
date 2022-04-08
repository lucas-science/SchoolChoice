import React, { Component } from 'react';
import './onglets.css'
import './CreerSession.css'

class CreerSession extends Component {
    constructor(props){
        super(props)
        this.state = {
          list_eleve:[],
          eleve:''
        }
        console.log("ok")
      }

      handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

      addname = (event) => {
        event.preventDefault();
        console.log(this.state.eleve)
        this.setState({eleve:''})
      }
    // différente route renvoyant un composant reac
    render() {
      return (
        <div className='app_body'>
          <div className="formulaire">
              <div className="creer_top">
                <div className="creer_part1">
                  <div className='creer_part1_a'>
                    <p>Nom de la Session</p>
                    <input className='creer_part1_input' type="text" />
                  </div>
                  <div className='creer_part1_b'>
                    <p>Nombre d'elèves</p>
                    <input className='creer_part1_input' type="text" />
                  </div>
                </div>
                <div className="creer_part2">
                  <p>Donnez la liste de vos élèves, afin de leur attribuer un identifiant.</p>
                  
                  <div className="creer_liste_eleves">
                    <div className="creer_student">
                      <p>Matthieu</p>
                    </div>
                    <div className="creer_student">
                      <p>Matthieu</p>
                    </div>
                    <div className="creer_student">
                      <p>Matthieu</p>
                    </div>
                    <div className="creer_student">
                      <p>Matthieu</p>
                    </div>
                    <div className="creer_student">
                      <p>Matthieu</p>
                    </div>
                  </div>

                  <div className='creer_form_add_eleve'>
                    <input type="text" name="eleve" onChange={this.handleInputChange} className='creer_textadd_eleve'/>
                    <input type="submit" className='creer_buttonadd_eleve' onClick={this.addname}/>
                  </div>
                </div>
              </div>
              <div className="creer_bottom">
                <input value={this.state.eleve} className='creer_submit_button' type="submit" value="Creer la Session"/>
              </div>
          </div>
        </div>
      );
    }
  }

export default CreerSession;
  