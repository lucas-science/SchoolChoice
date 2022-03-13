const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

// model "user" de la base de donné 
const userSchema = mongoose.Schema({
    nom: { type: String, required: true, },
    prenom: { type: String, required: true, },
    email: { type: String, required: true, unique: true, },
    mdp: { type: String, required: true },
    sessions: [{
        session_id: { type: String, required: true },
        nom: { type: String, required: true },
        nbr_eleve: { type: Number, require: true }
    }]
});

// fonction permettant de ne pas avoir de doublon
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);