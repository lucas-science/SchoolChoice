import React, { useState } from 'react';
import questions from './questionnaire1.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import axios from "axios"
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom';


export default function AppAvecLien() {
    const { id } = useParams()
    const cookies = new Cookies();

    const [questionencourt, setquestionencourt] = useState(0)

    const [montrerscore,setmontrerscore]=useState(false);

    const [scoreGeneral,setscoreGeneral] = useState(0);
    const [scoreSTI2D,setscoreSTI2D] = useState(0);
    const [scoreST2S,setscoreST2S] = useState(0);


    const [Connected, setConnected] = useState(false)

    const [Formulaire, setFormulaire] = useState({name:'', mdp:''})
    const [ErrorMessage, setErrorMessage] = useState("")

    const pochainequestionclick = (filiere) => {

        if(filiere.includes("proGENERAUX")){
            setscoreGeneral(scoreGeneral+1)
        } if ( filiere.includes("proSTI2D")){
            setscoreSTI2D(scoreSTI2D+1)
        }if (filiere.includes("proST2S")){
            setscoreST2S(scoreST2S+1)
        }

        const prochainequestion = questionencourt+1;
        if(prochainequestion < questions.length){
            setquestionencourt(prochainequestion)
        }else{
            setmontrerscore(true);
        }
    
    }

    cookies.set('resultatgeneral', Math.round((scoreGeneral/7)*100), { path: '/' });
    cookies.set('resultatSTI2D', Math.round((scoreSTI2D/6)*100), { path: '/' });
    cookies.set('resultatST2S', Math.round((scoreST2S/7)*100), { path: '/' });

    cookies.set('Resultat', JSON.stringify({
        general: Math.round((scoreGeneral/7)*100),
        Sti: Math.round((scoreSTI2D/6)*100),
        St2s: Math.round((scoreST2S/7)*100)
    }))
    // fonction qui permet de faire une pause de X temps
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
     }

  // modifié un "state" avec sa valeur, lorsque la valeur d'un champs de texte est modifié
    const handleInputChange = (event) => {
        const { value, name} = event.target
        if(name === "name"){
            setFormulaire({ name : value , mdp:Formulaire.mdp})
        }else{
            setFormulaire({mdp : value, name : Formulaire.name})
        }
    }


    // fonction qui permet de faire une requête afin de permettre à un élève de se connecter à une session
    const ConnexionEleve = () =>  {
        console.log(Formulaire.name, Formulaire.mdp)
        axios.post(process.env.REACT_APP_URL+'/connexion_to_session',{
            _idsession: id,
            id_co_session : Formulaire.name,
            mdp_session: Formulaire.mdp
        })
        .then(async res => {
            const {data, status} = res
            if (status === 200){
                setConnected(true)
                cookies.set('connected', true)
                cookies.set('mdp', Formulaire.mdp) // ajouter l'id de l'élève connecté afin qu'on puisse dans le futur l'identifier
            } else{
                setErrorMessage(data.message)
                await sleep(1500)
                setErrorMessage('')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        
        <div className='app'>
            {/* Afficher la boite de dialogue avant que l'élève veuillent commencer le questionnaire, pour qu'il se connnecte avant */}
            {!Connected ?(
                <div className="app_eleve_connexion">
                    <p className='app_titre_connexion'>Connecte toi à la session de ton professeur : </p>
                    <input name="name" onChange={handleInputChange} type="text" placeholder='Your name ...' className="app_eleve_nom" />
                    <input name="mdp" onChange={handleInputChange} type="password" placeholder='Your password' className="app_eleve_mdp" />
                    <input type="button" onClick={ConnexionEleve} value="Connexion" />
                    <p className='app_connexion_error_message'>{ErrorMessage}</p>
                </div>
            ):(
                <>
                {montrerscore? (
                    <div className='score-section'>
                        
                        <Link to='/'>
                            <img className='logo' src={logo} alt="logo" />
                            </Link>
                        <div className='box-texte'>Voici t'es resultats : </div>
                        <div className='box-reponse'>
                            <div className='box-resultat-filliere'>
                                <div className='titre-resultat-filliere'>STI2D</div>
                                <div className='resultat-filliere-scorre'>{Math.round((scoreSTI2D/6)*100)}%</div>

                            </div>

                            <div className='box-resultat-filliere'>
                                <div className='titre-resultat-filliere'>General</div>
                                <div className='resultat-filliere-scorre'>{Math.round((scoreGeneral/7)*100)}%</div>
                                <button className='boutton-questionnaire-spe' >

                                <Link to={'/AppSpe/'+id}>
                                QUESTIONNAIRE POUR CONNAITRE TA SPECIALITE
                                </Link>
                                
                                </button>
                            </div>

                            <div className='box-resultat-filliere'>
                                <div className='titre-resultat-filliere'>ST2S</div>
                                <div className='resultat-filliere-scorre'>{Math.round((scoreST2S/7)*100)}%</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <Link to='/'>
                            <img className='logo' src={logo} alt="logo" />
                            </Link>
                            <div className='carte'>
                                <div className='carteactuelle'>
                            
                                    <div>
                                        <span>Question {questionencourt+1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[questionencourt].questiontexte}</div>
                                </div>
                            </div>
                            <div className='reponse-section'>
                                <div className='bouttonsection'>
                                    {questions[questionencourt].reponse.map((reponse)=> <button className ="boutronreponse" onClick={()=>pochainequestionclick(reponse.filiere)}>{reponse.reponsetexte}</button>)}
                                </div>
                            </div>
                        </div>
                        
                    </>
                )}
            </>
            )}
        </div>
    );
}

