let express = require('express')
const User = require("../models/user")
const Session = require("../models/Session")


exports.DeleteSession = async (req, res) => {
    /*
    Fonction qui supprime une session dans la base de données 
    param : idsession
    */

    const { _idsession} = req.body
    await Session.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
    await User.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });