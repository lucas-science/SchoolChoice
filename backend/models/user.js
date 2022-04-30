const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

// model "user" de la base de donné 
const userSchema = mongoose.Schema({
    nom: { type: String, required: true, },
    prenom: { type: String, required: true, },
    email: { type: String, required: true, unique: true, },
    mdp: { type: String, required: true },
    sessions: {type : Array}
});

// fonction permettant de ne pas avoir de doublon
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);