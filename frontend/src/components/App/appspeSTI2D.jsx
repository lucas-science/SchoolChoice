import React, { useState } from 'react';
import questions from './questionnaireSTI2D.jsx';
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import './appspeSTI2D.css'
import Cookies from 'universal-cookie';
import jsPDF from 'jspdf'

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
	
	const STI2DPDF = String(scrore.get('Resultat').Sti)
	const Genralpdf= String(scrore.get('Resultat').general)
	const St2spdf = String(scrore.get('Resultat').St2s)
	const acpdf = String( Math.round((scoreAC/4)*100))
	const Sinpdf = String( Math.round((scoreSIN/7)*100))
	const itecpdf = String( Math.round((scoreITEC/4)*100))
	


	function genpdf () {

		const doc = new jsPDF();
		doc.text("Voici tes resultats :", 85, 20);
		doc.text("Tes score de fillières :", 30, 60);
		doc.text("STI2D :", 20, 90);
		doc.text(45,90, STI2DPDF)
		doc.text("%", 55, 90);
		doc.text("GENERAL :", 85, 90);
		doc.text(120,90, Genralpdf)
		doc.text("%", 130, 90);
		doc.text("ST2S :", 160, 90);
		doc.text(180,90, St2spdf)
		doc.text("%", 190, 90);



		doc.text("Tes score de specialités STI2D :", 30, 130);
		doc.text("AC :", 20, 170);
		doc.text(acpdf, 40, 170);
		doc.text("%", 50, 170);
		doc.text("SIN:", 85, 170);
		doc.text(105,170, Sinpdf)
		doc.text("%", 115, 170);
		doc.text("ITEC:", 160, 170);
		doc.text(180,170, itecpdf)
		doc.text("%", 190, 170);

		doc.text("Merci d'avoir utilisé SchoolChoice", 10, 200);

		doc.save('resultat-SchoolChoice.pdf')
	}





	return (
		
		<div className='app-sti' >
			
			{montrerscore? (
				<div id="az" className='score-section' >
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />
						</Link>
						<div className='box-texte'>Voici t'es precendent resultat : </div>
					<div >
						
							<div className='resultat-filliere-scorre'>STI2D : {scrore.get('Resultat').Sti}%</div>
                            <div className='resultat-filliere-scorre'>GENERAL: {scrore.get('Resultat').general}%</div>
                            <div className='resultat-filliere-scorre'>ST2S: {scrore.get('Resultat').St2s}%</div>
					
					</div>
					
					<div className='box-texte'>Voici t'es resultats pour la STI2D : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre'>AC : { Math.round((scoreAC/4)*100)}%</div>
                            <div className='resultat-filliere-scorre'>SIN : { Math.round((scoreSIN/7)*100)}%</div>
                            <div className='resultat-filliere-scorre'>ITEC: { Math.round((scoreITEC/4)*100)}%</div>
						</div>
					</div>
					
					<button className='bouton-recomencer'><Link to='/appspeSTI2Dresultatpdf'>
						Recommencer
						</Link></button>
					<button className ='telechargerpdfSTI2D' onClick={genpdf}> Download</button>


				</div>

			) : (
				
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
				
			)}
		</div>
	);
}
