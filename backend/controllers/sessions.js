let express = require('express')
const User = require("../models/user")
const Session = require("../models/Session")


exports.CreateSession = async (req, res) => {
    /*
    Fonction qui créer une session dans la base de données grace à un modèle défini 
    param : nom : nom de la session donné par le prof 
    eleves : liste d'élèves
    _idprof : l'id du prof dans la base de données 
    */

    const { nom_session, eleves, _idprof} = req.body
    const session = new Session({
        nom : nom_session, 
        eleve : eleves

    })
    await session.save()

    await User.findByIdAndUpdate(_idprof, {$push:{
        sessions : session.id
    }})
    
    res.status(200).send()
}

exports.DeleteSession = async (req, res) => {
    /*
    Fonction qui supprime une session dans la base de données 
    param : idsession, idprof
    */

    const { _idsessiondelete, _idprof} = req.body

    await Session.findByIdAndDelete(_idsessiondelete)
    
    let prof = await User.findById(_idprof)
    const found = prof.sessions.find(element => element ==_idsessiondelete)
    
    if (found != undefined){
        prof.sessions.splice(_idsessiondelete, 1)
    }
     
    await User.findByIdAndUpdate(_idprof, {
        sessions : prof.sessions
    })
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