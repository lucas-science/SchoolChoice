require('dotenv').config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// import models
const User = require('../models/user');

/**
 * Return if the email gived is valid or not.
 * @param {String} email 
 */
const isValideEmail = (email) => {

    const test = ['ac-strasbourg.fr',
        'ac-nancy-metz.fr',
        'ac-reims.fr',
        'ac-lille.fr',
        'ac-amiens.fr',
        'ac-caen.fr',
        'ac-renes.fr',
        'ac-nantes.fr',
        'ac-orleans-tours.fr',
        'ac-versailles.fr',
        'ac-paris.fr',
        'ac-creteil.fr',
        'ac-dijon.fr',
        'ac-besancon.fr',
        'ac-poitiers.fr',
        'ac-clermont.fr',
        'ac-lyon.fr',
        'ac-grenoble.fr',
        'ac-bordeaux.fr',
        'ac-aix-marseille.fr',
        'ac-montpellier.fr',
        'ac-toulouse.fr',
        'ac-nice.fr',
        'ac-corse.fr'
    ]
    if (email.match(/@/)) {
        let DnsPart = email.split('@')[1]

        return test.indexOf(DnsPart) >= 0
    } else {
        return false
    }
}

exports.CreateAccount = async(req, res, next) => {
    const { email, nom, prenom, mdp } = req.body

    // Si l'email est bien valide, créer un nouvel compte professeur
    if (isValideEmail(email)) {
        const hash = await bcrypt.hash(mdp, 10)
        const user = new User({
            nom: nom,
            prenom: prenom,
            email: email,
            mdp: hash
        })
        await user.save()
            .then(() => {
                const token = jwt.sign({ userId: user._id }, process.env.JSW_SECRET, {
                    expiresIn: '1h'
                });
                res.status(200).send({ 'token': token }) // renvoie 200 si tout s'est bien passé
            })
            .catch(err => {
                res.status(210).send({ message: "email déjà utilisé" }) // renvoie une erreur si l'email a déjà été utilisé
            })
    } else {
        res.status(210).send({ message: "il faut utiliser une adresse mail académique" }) // renvoie une erreur si l'email utilisé n'est pas un email académique 
    }
}

exports.ConnexionAccount = async(req, res, next) => {
    const { email, mdp } = req.body

    User.findOne({ email: email })
        .then(async user => {
            if (user) {
                bcrypt.compare(mdp, user.mdp, (err, result) => {
                    if (err) {
                        console.error(err);
                        res.status(210)
                            .json({
                                message: 'Internal error please try again'
                            });
                    } else if (!result) {
                        // si mot de passe incorrect
                        res.status(210)
                            .send({
                                message: 'Incorrect password'
                            });
                    } else {
                        // si mot de passe correct, création de la session et renvois le TOKEN
                        const token = jwt.sign({ userId: user._id }, process.env.JSW_SECRET, {
                            expiresIn: '1h'
                        });
                        res.status(200).send({ 'token': token })
                    }
                });
            } else {
                res.status(210).json({
                    message: `Incorrect email`
                })
            }
        })
        .catch(err => {
            res.status(210).send({
                message: `Internal error, please try again`
            })
        })
}