import React, { useState } from 'react';
import questions from './questionnaire1.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';



export default function App() {
	

	const [questionencourt, setquestionencourt] = useState(0)

	const [montrerscore,setmontrerscore]=useState(false);

	const [scoreGeneral,setscoreGeneral] = useState(0);
	const [scoreSTI2D,setscoreSTI2D] = useState(0);
	const [scoreST2S,setscoreST2S] = useState(0);

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

	const cookies = new Cookies();

	cookies.set('resultatgeneral', Math.round((scoreGeneral/7)*100), { path: '/' });
	cookies.set('resultatSTI2D', Math.round((scoreSTI2D/6)*100), { path: '/' });
	cookies.set('resultatST2S', Math.round((scoreST2S/7)*100), { path: '/' });




	return (
		
		<div className='app'>
			
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

							<Link to='/AppSpe'>
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
		</div>
	);
}

