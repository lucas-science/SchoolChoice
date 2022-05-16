import React, { useState } from 'react';
import questions from './questionnaireGeneral.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import './appspegeneral.css'



export default function App() {
	

	const [questionencourt, setquestionencourt] = useState(0)

	const [montrerscore,setmontrerscore]=useState(false);

	const [scoreNSI,setscoreNSI] = useState(0);
	const [scoreSI,setscoreSI] = useState(0);
    const [scoreMaths,setscoreMaths] = useState(0);
	const [scorePC,setscorePC] = useState(0);
    const [scoreLLCER,setscoreLLCER] = useState(0);
    const [scoreSES,setscoreSES] = useState(0);
    const [scoreHLP,setscoreHLP] = useState(0);
    const [scoreSVT,setscoreSVT] = useState(0);
    const [scoreHGGSP,setscoreHGGSP] = useState(0);


	const pochainequestionclick = (filiere) => {

		if(filiere.includes("NSI")){
			setscoreNSI(scoreNSI+1)
		} if ( filiere.includes("SI")){
			setscoreSI(scoreSI+1)
		}if (filiere.includes("Maths")){
			setscoreMaths(scoreMaths+1)
		}if (filiere.includes("PC")){
			setscorePC(scorePC+1)
		}
        if (filiere.includes("LLCER")){
			setscoreLLCER(scoreLLCER+1)
		}
        if (filiere.includes("SES")){
			setscoreSES(scoreSES+1)
		}
        if (filiere.includes("HLP")){
			setscoreHLP(scoreHLP+1)
		}
        if (filiere.includes("SVT")){
			setscoreHLP(scoreSVT+1)
		}
        if (filiere.includes("HGGSP")){
			setscoreHGGSP(scoreHGGSP+1)
		}




		const prochainequestion = questionencourt+1;
		if(prochainequestion < questions.length){
			setquestionencourt(prochainequestion)
		}else{
			setmontrerscore(true);
		}
		
	}




	return (
		
		<div className='app'>
			
			{montrerscore? (
				<div className='score-section'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						</Link>
					<div className='box-texte'>Voici t'es resultats pour la General : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre'>NSI : {scoreNSI}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>SI : {scoreSI}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>Maths: {scoreMaths}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>Physique-chimie: {scorePC}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>LLCER: {scoreLLCER}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>SES: {scoreSES}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>HLP: {scoreHLP}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>SVT: {scoreSVT}/{questions.length}</div>
                            <div className='resultat-filliere-scorre'>HGGSP: {scoreHGGSP}/{questions.length}</div>
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
							<div className='carte-spegeneral-actuel'>
						
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
