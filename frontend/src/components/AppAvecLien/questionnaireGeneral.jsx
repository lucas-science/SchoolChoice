import croix from './image/croix.png'
import coeur from './image/coeur.png'

const questions = [


	{
		questiontexte:  "As-tu un esprit logique ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","Maths","NSI","PC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "As-tu un haut niveau d’abstraction ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","Maths","NSI","PC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},


    {
		questiontexte:  "Aimes-tu chercher des solutions à un problème ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","Maths","NSI","PC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Te vois-tu ingénieur dans ta vie future ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","Maths","NSI","PC","SVT"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte:  "Est-ce que tu es rigoureux dans tes démonstrations/ raisonnements ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","Maths","NSI","PC"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:  "Veux-tu te tourner vers un domaine dans la santé ?  ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["Maths","PC","SVT"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte:  "Est-ce que t’es un geek ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["NSI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 
    {
		questiontexte:  "Avez-vous déjà programmé dans votre vie ou souhaiteriez-vous apprendre (scratch ne compte pas) ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","NSI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte:  "Es-tu à l’aise avec l’anglais ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["NSI","LLCER"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte:  "Aimes-tu travailler en équipe ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","NSI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 
    {
		questiontexte:  "Aimes-tu travailler longtemps devant un PC ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI","NSI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 
    {
		questiontexte:  "Est-ce que tu veux travailler dans le numérique (développeur, data scientist, etc) ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["NSI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 
    {
		questiontexte: "Etes-vous pluridisciplinaire (Mécanique, Electronique, Convertisseur d’énergie, programmation) ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SI"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte: "Aimes-tu analyser et développer sur un sujet ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["LLCER","SES","HLP","HGGSP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte: "Est-ce que tu t’intéresses aux autres cultures ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["LLCER"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte: "Est-ce que l’interaction envers les pays Anglo-Saxons t’intéresse ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["LLCER"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte: "Est-ce que tu te vois utiliser l’anglais tous les jours dans ton métier futur ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["LLCER"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	}, 

    {
		questiontexte: "Est-ce que l’histoire et le monde qui t’entoure t’intéresse ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HGGSP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Est-ce que l’interaction géopolitique t’intéresse ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HGGSP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},

    {
		questiontexte: "Est-ce que les problématiques du monde moderne t’intéressent ?",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HGGSP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Aime tu suivre l’actualité ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HGGSP","SES"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Est-ce que le domaine de la finance t’intéresse ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SES"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Est-ce que le droit t’intéresse ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["SES","HGGSP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Est-ce que tu aimes t’intéresser à des sujets abstrait auxquels le commun des mortels n’a pas de réponses claires ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HLP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
    {
		questiontexte: "Aimes-tu remettre les choses en question ? ",
		reponse: [
            { reponsetexte: <img className='coeur' src={coeur} alt="oui"/> , filiere : ["HLP"]},
            { reponsetexte: <img className='croix' src={croix} alt="non"/>, filiere : [	]},
		],
	},
];



export default questions;