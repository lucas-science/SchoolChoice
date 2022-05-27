let express = require('express')
const User = require("../models/user")
const Session = require("../models/Session")
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


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
    const { nom_session, eleves } = req.body
    const { _idprof } = res.locals

    // si les cookie sont validé, passé à la prochaine fonction grâce à "next()"

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
    const resultat = await User.findByIdAndUpdate(_idprof, {
        $push: {
            sessions: session.id
        }
    })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send({
        id_session: session.id,
        listEleve: eleves_mdp
    })

}

exports.DeleteSession = async(req, res) => {
    /*
    Fonction qui supprime une session dans la base de données 
    param : idsession, idprof
    */

    const { _idsessiondelete } = req.body
    const { _idprof } = res.locals
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
    var { _idsessionmodify, new_nom_session } = req.body

    // Met à jour le nom de la session Si on le modifie
    if (new_nom_session != "") {
        await Session.findByIdAndUpdate(_idsessionmodify, {
            nom: new_nom_session
        })
    }

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()

}

exports.AddEleveToSession = async(req, res) => {
    var { _idsessionmodify, new_eleves } = req.body

    // rajoute les élèves avec un mdp généré aléatoirement 
    let eleves_mdp = []
    new_eleves.forEach(async nom_eleve => {
        await Session.findByIdAndUpdate(_idsessionmodify, {
            $push: {
                eleve: {
                    [nom_eleve]: generateP(4)
                }
            }
        })
    })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}

exports.DelEleveToSession = async(req, res) => {
    var { _idsessionmodify, del_eleves } = req.body

    // Cherche la liste des élèves dans la session
    let session = await Session.findById(_idsessionmodify)

    // Copie tous les élèves présents dans la session 
    var eleves = session.eleve

    // Supprime les élèves voulu dans la liste copiée
    for (let i = 0; i < del_eleves.length; i++) {
        for (let j = 0; j < session.eleve.length; j++) {
            if (Object.keys(session.eleve[j])[0] == del_eleves[i]) {
                eleves.splice(j, 1)
            }
        }
    }

    // Met à jour la liste des élèves dans la BDD
    await Session.findByIdAndUpdate(_idsessionmodify, {
        eleve: eleves
    })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}


exports.ConnexionToSession = async(req, res) => {
    const { _idsession, id_co_session, mdp_session } = req.body

    let session = await Session.findById(_idsession)

    let id_correct = false
    console.log(session)

    try {
        for (let i = 0; i < session.eleve.length; i++) {
            // Vérifie si l'identifiant est dans la liste
            if (Object.keys(session.eleve[i])[0] == id_co_session) {
                // Si identifiant est correct, variable mise à true pour dire que l'identifiant est bien dans la liste
                id_correct = true

                // Vérifie si le mdp correspond
                if ((Object.values(session.eleve[i]))[0] == mdp_session) {

                    // Renvoie un statut 200 pour dire que tout s'est bien passé
                    res.status(200).json({ message: "Connexion réussie" })

                } else {
                    // Renvoie un statut 210 pour dire qu'il y a une erreur
                    res.status(210).json({ message: "Mot de passe incorrect" })
                }
            }

        }
        // Si l'identifiant est incorrect
        if (id_correct == false) {
            // Renvoie un statut 210 pour dire qu'il y a une erreur
            res.status(210).json({ message: "Identifiant incorrect" })
        }
    } catch (err) {
        console.log(err)
    }
}

exports.ViewSessions = async(req, res, next) => {
    // Récupère les infos transmises
    const { _idprof } = res.locals

    // Cherche le prof et ses sessions
    let prof = await User.findById(_idprof)
    const sessions = prof.sessions
    let infos_sessions = []
    let eleves = []

    // Parcours les sessions du prof et copie toutes les données dans infos_sessions
    for (let i = 0; i < sessions.length; i++) {
        let current_session = await Session.findById(sessions[i])
        try {
            for (let j = 0; j < current_session.eleve.length - 1; j++) {
                eleves.push({ "eleve": current_session.eleve[j] })
            }

            let infos_json = { "nom": current_session.nom, "eleve": eleves }
            infos_sessions.push(infos_json)
            eleves = []
        } catch (e) {
            console.log(e)
        }

    }

    // Renvoie un statut 200 et les infos des sessions du prof 
    res.status(200).send(infos_sessions)
}

exports.SaveResultatsEleve = async(req, res) => {
    // Récupère les infos transmises
    const { filiere, spes, _idsession, id_co_session, mdp_session } = req.body

    // Cherche la session ciblée
    let session = await Session.findById(_idsession)

    // Créer une liste pour mettre à jour celle de la session
    let eleve = []

    // Date et heure
    var now = new Date()
    let month = now.getMonth() + 1
    let date = String(now.getDate() + "/" + month + "/" + now.getFullYear())

    // Parcours session et met a jour l'eleve concerné 
    for (let i = 0; i < session.eleve.length; i++) {

        if (Object.keys(session.eleve[i])[0] == id_co_session && String(Object.values(session.eleve[i])) == mdp_session) {
            eleve.push({

                [id_co_session]: mdp_session,
                "date": date,
                "horaire": now.getHours() + ":" + now.getMinutes(),
                "filiere": filiere,
                "spes": spes
            })
        } else {
            eleve.push(session.eleve[i])
        }

    }
    // Met à jour la session du prof
    await Session.findByIdAndUpdate(_idsession, { eleve: eleve })

    // Renvoie un statut 200 pour dire que tout s'est bien passé
    res.status(200).send()
}

exports.SendStats = async(req, res) => {
    const { _idsession_stats } = req.body

    let session = await Session.findById(_idsession_stats)

    let eleve = session.eleve
}

/* A mettre dans le body pour réussir à faire marcher les fonctions : 
{
    "_idsessionmodify":"",
    "_idsessiondelete":"",
    "nom_session":"",
    "new_nom_session":"",
    "eleves" : [],
    "new_eleves":["", ""],
    "del_eleves":["",""],
    "_idprof":"", 
    "_idsession":"", 
    "id_co_session":"",
    "mdp_session":""
}
*/