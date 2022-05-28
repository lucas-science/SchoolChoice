import React, { useState } from 'react';
import questions from './questionnaireGeneral.jsx'; //import les questions destinner au general
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import './appspegeneral.css'
import Cookies from 'universal-cookie';	//import les cookies
import jsPDF from 'jspdf'		// import pdf de jspdf

export default function App() {
	

	const [questionencourt, setquestionencourt] = useState(0)	// permet de savoir quelle question afficher

	const [montrerscore,setmontrerscore]=useState(false);	// permet de savoir si le questionnaire est fini

	const [scoreNSI,setscoreNSI] = useState(0);			//initialise les compteurs des scores à 0 
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
		}if (filiere.includes("Maths")){			//faire +1 pour la categorie pesente dans le resultat de questionnairesGeneral.jsx 
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




		const prochainequestion = questionencourt+1;		// augmente le compteur prochainequestion affin de pouvoir changer de question
		if(prochainequestion < questions.length){
			setquestionencourt(prochainequestion)
		}else{											//si le questionnaire est fini afficher le score en changen 'montrerscore'
			setmontrerscore(true);
		}
		
	}


<<<<<<< HEAD
	const scrore = new Cookies();					// import la fonction cookie


	const STI2DPDF = String(scrore.get('Resultat').Sti)				//reprends le resultat du questionnaire des spe grace au cookie
=======
	const test = () => {
		console.log('nhdfzj')
	}



	const scrore = new Cookies();
	console.log(scrore.get('Resultat').general)

	const STI2DPDF = String(scrore.get('Resultat').Sti)
>>>>>>> 9c46ac1820d6b3fec66d44390584bccd81b90b8b
	const Genralpdf= String(scrore.get('Resultat').general)
	const St2spdf = String(scrore.get('Resultat').St2s)
	const NSIpdf = String( Math.round((scoreNSI/11)*100))
	const SIpdf = String(Math.round((scoreSI/9)*100))
	const Mathspdf = String( Math.round((scoreMaths/6)*100))

	const PCpdf = String(Math.round((scorePC/6)*100))						//permet d'afficher les resultat dans le pdf
	const LLCERpdf = String(Math.round((scoreLLCER/5)*100))
	const SESpdf = String( Math.round((scoreSES/4)*100))

	const hlppdf = String(Math.round((scoreHLP/3)*100))
	const svtpdf = String(Math.round((scoreSVT/2)*100))
	const hgsppdf = String(Math.round((scoreHGGSP/6)*100))


	function genpdf () {

		const doc = new jsPDF();
		doc.text("Voici tes resultats :", 85, 20);
		doc.text("Tes score de fillieres :", 30, 60);		//creation du pdf avec les resultat 
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
		doc.text("NSI :", 20, 170);
		doc.text(NSIpdf , 40, 170);
		doc.text("%", 50, 170);
		doc.text("SI:", 85, 170);
		doc.text(105,170, SIpdf)
		doc.text("%", 115, 170);
		doc.text("MATHS:", 150, 170);
		doc.text(175,170,Mathspdf)
		doc.text("%", 185, 170);

		doc.text("PC:", 20, 190);
		doc.text(PCpdf  , 40,190);
		doc.text("%", 50, 190);
		doc.text("LLCER:", 85, 190);
		doc.text(110,190, LLCERpdf)
		doc.text("%", 120,190);
		doc.text("SES :", 150, 190);
		doc.text(175,190,SESpdf )
		doc.text("%", 185, 190);

		doc.text("HLP :", 20, 210);
		doc.text(hlppdf   , 40,210);
		doc.text("%", 50, 210);
		doc.text("SVT:", 85, 210);
		doc.text(110,210, svtpdf )
		doc.text("%", 120,210);
		doc.text("HGGSP:", 150, 210);
		doc.text(175,210,hgsppdf )
		doc.text("%", 185, 210);

		doc.text("Merci d'avoir utilisé SchoolChoice", 10, 250);

		doc.save('resultat-SchoolChoice.pdf')
	}




	return (
		
		<div className='app-general'>
			
<<<<<<< HEAD
			{montrerscore? (					//si questionnaire fini afficher resultat
=======
			{montrerscore ? (
>>>>>>> 9c46ac1820d6b3fec66d44390584bccd81b90b8b
				<div className='score-section'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />				{/* renvoie a la page d'aceuil si logo cliquer*/}
						</Link>
					
						<div className='box-texte-general'>Voici t'es precendent resultat : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre-G'>STI2D : {scrore.get('Resultat').Sti}%</div>
                            <div className='resultat-filliere-scorre-G'>GENERAL : {scrore.get('Resultat').general}%</div>		{/*reprends le resultat du questionnaire des spe grace au cookie*/}
                            <div className='resultat-filliere-scorre-G'>ST2S : {scrore.get('Resultat').St2s}%</div>
						</div>
					</div>
					<div className='box-texte-general'>Voici t'es resultats pour la General : </div>
					<div >
						<div>
							<div className='resultat-filliere-scorre-G'>NSI : {Math.round((scoreNSI/11)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>SI : {Math.round((scoreSI/9)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>Maths : {Math.round((scoreMaths/6)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>PC : {Math.round((scorePC/6)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>LLCER : {Math.round((scoreLLCER/5)*100)}%</div>			{/* renvoie les resultats des scores diviser par le nombe de point possible puis *100 pour mettre le resultat en pourcentage sur 100 */}

                            <div className='resultat-filliere-scorre-G'>SES : {Math.round((scoreSES/4)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>HLP : {Math.round((scoreHLP/3)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>SVT : {Math.round((scoreSVT/2)*100)}%</div>
                            <div className='resultat-filliere-scorre-G'>HGGSP : {Math.round((scoreHGGSP/6)*100)}%</div>
							<div className='resultat-filliere-scorre-G'>TEST : %</div>
						</div>
					</div>
					<button className='bouton-recomencer'><Link to='/app'>						{/* renvoie le premier questionnaire affin de reccomencer*/}
						Recommencer
						</Link></button>
<<<<<<< HEAD
						<button className ='telechargerpdfgeneral' onClick={genpdf}> Download</button>	{/* boutton pour telecharger le pdf crrer avec 'genpdf' */}
=======
						<button className ='telechargerpdfgeneral' onClick={genpdf}> Download</button>

>>>>>>> 9c46ac1820d6b3fec66d44390584bccd81b90b8b
				</div>
			) : (	//sinon montrer le questionnaire
				<>
					<div className='question-section'>
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />		{/* renvoie a la page d'aceuil si logo cliquer*/}
						</Link>
						<div className='carte'>
							<div className='carte-spegeneral-actuel'>
						
								<div>
									<span>Question {questionencourt+1}</span>/{questions.length}		{/* affiche le numero de la question actuelle sur le nombre de question total*/}
								</div>
								<div className='question-text'>{questions[questionencourt].questiontexte}</div>	{/* afficher la question prise dans questionnairegeneral.jsx corespondnt au numero de la question*/}
							</div>
						</div>
						<div className='reponse-section'>
							<div className='bouttonsection'>
								{questions[questionencourt].reponse.map((reponse)=> <button className ="boutronreponse" onClick={()=>pochainequestionclick(reponse.filiere)}>{reponse.reponsetexte}</button>)} {/* permet a l'utilisateur de choisir sa reponse et fait +1 dans les compteur selon la reponse et selon ce qui est contenu dans le reultat des question dans questionnairegenneral.jsx puis affiche la question suivante lorsque une reponse est selectionner */}
							</div>
						</div>
					</div>
					
				</>
			)}
		</div>
	);
}

