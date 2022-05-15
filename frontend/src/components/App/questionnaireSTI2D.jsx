import croix from './image/croix.png'
import coeur from './image/coeur.png'

const questions = [


	{
		questiontexte:  "Etes-vous attiré par l’architecture ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["AC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "L’informatique est un sujet qui vous intéresse ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Préfères tu créer des choses concrètes ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["ITEC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "As-tu un esprit créatif ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["AC","ITEC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Les objets connectés et le domaine de l’embarqué t’intéresse ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "La modélisation 3D est un domaine qui t’intéresse ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["ITEC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Aimes-tu l’électronique ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Etes vous une personne curieuse qui sait chercher l’information ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},{
		questiontexte:"Avez-vous un profil pluridisciplinaire (Mécanique, Electronique, Convertisseur d'énergie, programmation) ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Te vois-tu travailler dans le domaine scientifiques et industriels ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Etes vous à l’aise avec l’environnement Arduino ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SIN"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Etes vous à l’aise avec l’environnement SolidWorks ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["ITEC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Aimes-tu faire des maquettes ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["AC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:"Les maisons innovantes t’intéresse-t-elle ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["AC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
    }

];



export default questions;