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

exports.ModifySessionName = async(req, res) => {
    var { _idsessionmodify, new_nom_session} = req.body

    // Met à jour le nom de la session Si on le modifie
    if (new_nom_session != "" ) {
        await Session.findByIdAndUpdate(_idsessionmodify, {
            nom : new_nom_session 
            })
        }

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()

}

exports.AddEleveToSession = async(req, res) => {
    var { _idsessionmodify, new_eleves} = req.body

    // rajoute les élèves avec un mdp généré aléatoirement 
    let eleves_mdp = []
    new_eleves.forEach(async nom_eleve => {
        await Session.findByIdAndUpdate(_idsessionmodify, {$push: {
            eleve: {[nom_eleve]: generateP(4)}
        }})
    })
    
    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}

exports.DelEleveToSession = async(req, res) => {
    var { _idsessionmodify, del_eleves} = req.body

    // Cherche la liste des élèves dans la session
    let session = await Session.findById(_idsessionmodify)

    // Copie tous les élèves présents dans la session 
    var eleves = session.eleve
    var Key = Object.keys(session.eleve[0])
    
    // Supprime les élèves voulu dans la liste copiée
    for (let i = 0; i < del_eleves.length; i++) {
        for (let j = 0; j < session.eleve.length; j++) {          
            if (Object.keys(session.eleve[j])[0]==del_eleves[i]) {
                eleves.splice(j,1)
            }}}

    // Met à jour la liste des élèves dans la BDD
    await Session.findByIdAndUpdate(_idsessionmodify, {
        eleve: eleves
    })
    
    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}



/* A mettre dans le body pour réussir à faire marcher les fonctions : 
{
    "_idsessiondelete":"",
    "nom_session":"",
    "eleves" : [],
    "_idprof":"",
    "_idsessionmodify":"",
    "new_nom_session":"",
    "new_eleves":["", ""], 
    "del_eleves":["",""]
}
*/