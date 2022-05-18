import React, { useState } from 'react';
import questions from './questionnaireGeneral.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import './appspegeneral.css'
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';


export default function App() {
	const { id } = useParams()
	const cookies = new Cookies();

	const h = useHistory()

	if(!Boolean(cookies.get('connected'))){
		h.push('/app/'+id)
	}

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
			setscoreSVT(scoreSVT+1)
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

	const SendResultats = () => {
		console.log('send')
	}


	console.log(cookies.get('Resultat').general)
	return (
		
		<div className='app-general'>
			{montrerscore ? (
				<div className='score-section'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						</Link>
					
						<div className='box-texte-general'>Voici t'es precendent resultat : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre-G'>STI2D : {cookies.get('resultatSTI2D')}%</div>
                            <div className='resultat-filliere-scorre-G'>GENERAL : {cookies.get('resultatgeneral')}%</div>
                            <div className='resultat-filliere-scorre-G'>ST2S : {cookies.get('resultatST2S')}%</div>
						</div>
					</div>
					<div className='box-texte-general'>Voici t'es resultats pour la General : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre-G'>NSI : {Math.round((scoreNSI/11)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>SI : {Math.round((scoreSI/9)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>Maths : {Math.round((scoreMaths/6)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>PC : {Math.round((scorePC/6)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>LLCER : {Math.round((scoreLLCER/5)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>SES : {Math.round((scoreSES/4)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>HLP : {Math.round((scoreHLP/3)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>SVT : {Math.round((scoreSVT/2)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>HGGSP : {Math.round((scoreHGGSP/6)*100)}%</div>
							<div className='resultat-filliere-scorre-G'>TEST : %</div>
						</div>
					</div>
					<input className='envoyer_resultat' type="button" value="Envoyer Resultats au professeur" onClick={SendResultats} />
					<button className='bouton-recomencer'><Link to='/app'>
						Recommencer
						</Link></button>
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

