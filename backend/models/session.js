const mongoose = require('mongoose')
//const uniqueValidator = require('mongoose-unique-validator')

// Permet de créer un schéma pour la base de données 
const sessionSchema = mongoose.Schema({
    nom : {type : String, required : true, },
    eleve : {type : Array, required : true, }
})

//sessionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Session', sessionSchema)