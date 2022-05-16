import React, { useState } from 'react';
import questions from './questionnaireSTI2D.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import './appspeSTI2D.css'
import Cookies from 'universal-cookie';


export default function App() {
	

	const [questionencourt, setquestionencourt] = useState(0)

	const [montrerscore,setmontrerscore]=useState(false);

	const [scoreAC,setscoreAC] = useState(0);
	const [scoreSIN,setscoreSIN] = useState(0);
    const [scoreITEC,setscoreITEC] = useState(0);



	const pochainequestionclick = (filiere) => {

		if(filiere.includes("AC")){
			setscoreAC(scoreAC+1)
		} if ( filiere.includes("SIN")){
			setscoreSIN(scoreSIN+1)
		}if (filiere.includes("ITEC")){
			setscoreITEC(scoreITEC+1)
		}




		const prochainequestion = questionencourt+1;
		if(prochainequestion < questions.length){
			setquestionencourt(prochainequestion)
		}else{
			setmontrerscore(true);
		}
		
	}

	
	const scrore = new Cookies();

	return (
		
		<div className='app-sti'>
			
			{montrerscore? (
				<div className='score-section'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						</Link>
						<div className='box-texte'>Voici t'es precendent resultat : </div>
					<div >
						
							<div className='resultat-filliere-scorre'>STI2D : {scrore.get('resultatSTI2D')}%</div>
                            <div className='resultat-filliere-scorre'>GENERAL: {scrore.get('resultatgeneral')}%</div>
                            <div className='resultat-filliere-scorre'>ST2S: {scrore.get('resultatST2S')}%</div>
					
					</div>
					
					<div className='box-texte'>Voici t'es resultats pour la STI2D : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre'>AC : { Math.round((scoreAC/4)*100)}%</div>
                            <div className='resultat-filliere-scorre'>SIN : { Math.round((scoreSIN/7)*100)}%</div>
                            <div className='resultat-filliere-scorre'>ITEC: { Math.round((scoreITEC/4)*100)}%</div>
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
							<div className='carte-speSTI2D-actuel'>
						
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
