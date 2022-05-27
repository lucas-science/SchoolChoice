import React, { useState } from 'react';
import questions from './questionnaire1.jsx';    //import les question destinner au choix de fillieres 
import './app.css'
import logo from './image/logo.png'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';    //import les cookies
import jsPDF from 'jspdf'			// import pdf de jspdf


export default function App() {
	

	const [questionencourt, setquestionencourt] = useState(0) // permet de savoir quelle question afficher

	const [montrerscore,setmontrerscore]=useState(false); // permet de savoir si le questionnaire est fini

	const [scoreGeneral,setscoreGeneral] = useState(0); //initialise les compteurs des scores à 0 
	const [scoreSTI2D,setscoreSTI2D] = useState(0);
	const [scoreST2S,setscoreST2S] = useState(0);

	const pochainequestionclick = (filiere) => {

		if(filiere.includes("proGENERAUX")){
			setscoreGeneral(scoreGeneral+1)
		} if ( filiere.includes("proSTI2D")){		//faire +1 pour la categorie pesente dans le resultat de questionnaires1.jsx 
			setscoreSTI2D(scoreSTI2D+1)
		}if (filiere.includes("proST2S")){
			setscoreST2S(scoreST2S+1)
		}



		const prochainequestion = questionencourt+1;  // augmente le compteur prochainequestion affin de pouvoir changer de question
		if(prochainequestion < questions.length){
			setquestionencourt(prochainequestion)
		}else{										//si le questionnaire est fini afficher le score en changen 'montrerscore'
			setmontrerscore(true);
		}
	
	}

	const cookies = new Cookies();			// creer un nouveau cookie affin d'envoyer le resultat des filliers sur une autre page 


	cookies.set('Resultat', JSON.stringify({
        general: Math.round((scoreGeneral/7)*100),
        Sti: Math.round((scoreSTI2D/6)*100),		//intialise le cookie avec les resultat
        St2s: Math.round((scoreST2S/7)*100)
    }))








	const STI2DPDF = String(Math.round((scoreSTI2D/6)*100))
	const Genralpdf= String(Math.round((scoreGeneral/7)*100))	//permet d'fficher les resultat dans le pdf
	const St2spdf = String(Math.round((scoreST2S/7)*100))


	function genpdf () {

		const doc = new jsPDF();
		doc.text("Voici t'es resultats :", 85, 20);
		doc.text("Tes score de fillieres :", 30, 60);
		doc.text("STI2D :", 20, 90);
		doc.text(45,90, STI2DPDF)
		doc.text("%", 55, 90);
		doc.text("GENERAL :", 85, 90);					//creation des données du pdf 
		doc.text(120,90, Genralpdf)
		doc.text("%", 130, 90);
		doc.text("ST2S :", 160, 90);
		doc.text(180,90, St2spdf)
		doc.text("%", 190, 90);





		doc.text("Merci d'avoir utilisé SchoolChoice", 10, 110);

		doc.save('resultat-SchoolChoice.pdf')
	}


	return (
		
		<div className='app'>
			
			{montrerscore? (  				//si questionnaire fini afficher resultat
				<div className='score-section'>
					
					<Link to='/'>
						<img className='logo' src={logo} alt="logo" />			{/* renvoie a la page d'aceuil si logo cliquer*/}
						</Link>
					<div className='box-texte'>Voici t'es resultats : </div> 
					<div className='box-reponse'>
						<div className='box-resultat-filliere'>
							<div className='titre-resultat-filliere'>STI2D</div>
							<div className='resultat-filliere-scorre'>{Math.round((scoreSTI2D/6)*100)}%</div>		{/* renvoie le resultat du score sti diviser par le nombe de point sti possible ici 6 puis *100 pour mettre le resultat en pourcentage sur 100 */}

						</div>

						<div className='box-resultat-filliere'>
							<div className='titre-resultat-filliere'>General</div>
							<div className='resultat-filliere-scorre'>{Math.round((scoreGeneral/7)*100)}%</div>  {/* renvoie le resultat general*/}
							<button className='boutton-questionnaire-spe' >

							<Link to='/AppSpe'>
							QUESTIONNAIRE POUR CONNAITRE TA SPECIALITE    {/* renvoie la page pour faire un autre questionnaire*/}
            				</Link>
							
            				</button>
						</div>

						<div className='box-resultat-filliere'>
							<div className='titre-resultat-filliere'>ST2S</div>
							<div className='resultat-filliere-scorre'>{Math.round((scoreST2S/7)*100)}%</div>  {/* renvoie le score pour ST2S*/}
						</div>
					</div>
					<button className ='telechargerpdf' onClick={genpdf}> Download</button>    {/* boutton pour telecharger le pdf crrer avec 'genpdf' */}
				</div>
			) : (		//sinon montrer le questionnaire
				<>
					<div className='question-section'>
						<Link to='/'>
						<img className='logo' src={logo} alt="logo" />  	{/* renvoie a la page d'aceuil si logo cliquer*/}
						</Link>
						<div className='carte'>
							<div className='carteactuelle'>
						
								<div>
									<span>Question {questionencourt+1}</span>/{questions.length}	{/* affiche le numero de la question actuelle sur le nombre de question total*/}		
								</div>
								<div className='question-text'>{questions[questionencourt].questiontexte}</div> {/* afficher la question prise dans questionnaire1.jsx corespondnt au numero de la question*/}
							</div>
						</div>
						<div className='reponse-section'>
							<div className='bouttonsection'>
								{questions[questionencourt].reponse.map((reponse)=> <button className ="boutronreponse" onClick={()=>pochainequestionclick(reponse.filiere)}>{reponse.reponsetexte}</button>)} {/* permet a l'utilisateur de choisir sa reponse et fait +1 dans les compteur selon la reponse et selon ce qui est contenu dans le reultat des question dans questionnaire1.jsx puis affiche la question suivante lorsque une reponse est selectionner */}
							</div>
						</div>
					</div>
					
				</>
			)}
		</div>
	);
}

