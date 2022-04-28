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

    const { nom, eleves, _idprof} = req.body
    const session = new Session({
        nom : nom, 
        eleve : eleves

    })
    await session.save()

    await User.findByIdAndUpdate(_idprof, {$push:{
        sessions : session._id
    }})

    res.status(200).send()
}
