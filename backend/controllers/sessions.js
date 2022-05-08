let express = require('express')
const User = require("../models/user")
const Session = require("../models/Session")

function generateP(length) {
    let pass = '';
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789#$';

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
    }

    return pass
}

exports.CreateSession = async(req, res) => {
    /*
    Fonction qui créer une session dans la base de données grace à un modèle défini 
    param : nom : nom de la session donné par le prof 
    eleves : liste d'élèves
    _idprof : l'id du prof dans la base de données 
    */

    // Créer une session grace aux éléments présent dans le body
    const { nom_session, eleves, _idprof } = req.body

    let eleves_mdp = []
    eleves.forEach(eleve => {
        eleves_mdp.push({
            [eleve]: generateP(4)
        })
    });

    const session = new Session({
        nom: nom_session,
        eleve: eleves_mdp
    })
    await session.save()

    // Met à jour la table du professeur
    await User.findByIdAndUpdate(_idprof, {
        $push: {
            sessions: session.id
        }
    })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}

exports.DeleteSession = async(req, res) => {
    /*
    Fonction qui supprime une session dans la base de données 
    param : idsession, idprof
    */

    const { _idsessiondelete, _idprof } = req.body
        // Supprime une session grace aux éléments présent dans le body
    await Session.findByIdAndDelete(_idsessiondelete)

    // Cherche la liste des sessions du professeur
    let prof = await User.findById(_idprof)
    const found = prof.sessions.find(element => element == _idsessiondelete)

    // Si la session est trouvée dans la liste du professeur, il la supprime
    if (found != undefined) {
        prof.sessions.splice(_idsessiondelete, 1)
    }

    // Met à jour la table du professeur
    await User.findByIdAndUpdate(_idprof, {
        sessions: prof.sessions
    })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}




/* A mettre dans le body pour réussir à faire marcher les fonctions : 
{
    "_idsessiondelete":"",
    "nom_session":"",
    "eleves" : [],
    "_idprof":""
}
*/