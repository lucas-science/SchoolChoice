const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// récupérer le questionnaire
const QCM = require('./qcm.json')

// import User controllers
const { CreateAccount, ConnexionAccount } = require('./controllers/user')

// import Session controllers
const { CreateSession, DeleteSession, ModifySessionName, AddEleveToSession, DelEleveToSession, ConnexionToSession, ViewSessions, SaveResultatsEleve } = require('./controllers/sessions')

// import auth controller
const { auth } = require('./controllers/auth')



// initialisation body parser pour récupérer donné au format json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// initialisation cookie parser pour récupérer les cookies
app.use(cookieParser());

// configuration CORS
app.use(
    cors({
        origin: process.env.CORS_URL,
        credentials: true
    })
);

// Connexion à la base de données 
const db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5rx1a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Différentes routes reliées aux différentes fonctions 
app.use('/create_account', CreateAccount)
app.use('/connexion', ConnexionAccount)


// renvoyer le qcm 
app.use('/qcm', (req, res, next) => {
    res.status(200).send(QCM.Specialitees)
})

// ensemble des fonction, fonction "auth" pour décrypter le Token, représentant l'ID du professeur
app.use('/create_session', auth, CreateSession)
app.use('/delete_session', auth, DeleteSession)
app.use('/modify_session_name', ModifySessionName)
app.use('/add_eleve_to_session', AddEleveToSession)
app.use('/del_eleve_to_session', DelEleveToSession)
app.use('/connexion_to_session', ConnexionToSession)
app.use('/view_sessions', auth, ViewSessions)
app.use('/save_resultats', SaveResultatsEleve)

// fonction qui permet de savoir si la personne est un professeur ou non (si il possède donc un TOKEN valide)
app.use('/auth', (req, res, next) => {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;
    // si il n'y a pas de cookie
    if (!token) {
        res.status(400).json({ message: "Vous n'êtes pas autorisé" });
    } else {
        // si il y a des cookies, vérifier s'ils sont encore valide avec la fonction du package JSONwebtoken
        jwt.verify(token, process.env.JSW_SECRET, function(err, decoded) {
            if (err) {
                res.status(401).send({ error: "invalide token" });
            } else {
                // si les cookie sont validé, passé à la prochaine fonction grâce à "next()"
                req._idprof = decoded.userId
                res.sendStatus(200)
            }
        });
    }
})
module.exports = app;