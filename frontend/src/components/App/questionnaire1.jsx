import croix from './image/croix.png'
import coeur from './image/coeur.png'

const questions = [


	{
		questiontexte:  "Etes vous une personne travailleuse et serait tu prêt à travailler davantage ?",	// questionn a afficher
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["proGENERAUX"]},		// resultat a augmenter si coeur est cliquer 
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},					// resultat a augmenter si croix est cliquer 
		],
	},

    {
		questiontexte:  "Aimez vous faire des traveaux en groupe ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proSTI2D","proST2S"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Avez vous eu les félicitations durant les trimestres précédents ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Etes vous une personne manuelle ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S","proSTI2D"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Préférez vous faire des études longues (bac+5, bac+8) ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Préférez vous faire des études courtes (bac+2, bac+3) ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S","proSTI2D"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:  "Est ce que tu comprends mieux en pratiquant ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S","proSTI2D"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:  "Est ce que tu aimes bien la théorie ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Est ce que tu as un niveau d'abstraction élevé ? (bonne compréhenssion dans les matières scientifiques)",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Est ce que vous aimez réaliser des projets techniques ? (construire des objets, dévelloper un programme informatique, etc)",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proSTI2D"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte: "Aimes tu le domaine de la santé ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Aimes tu être en contact et aider les gens ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte: "Es tu intéressé par l'humain et son évolution au sein d'une société ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proST2S"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte: "Veux tu te garder toutes les possibilités de poursuite d'étude ouvertes ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Préfères tu concevoir ou créer les choses concrètement ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proSTI2D"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Est ce que tu aimes lire ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/>, filiere : ["proGENERAUX"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},


];



export default questions;