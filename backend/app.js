const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const QCM = require('./qcm.json')
    // import User controllers
const { CreateAccount, ConnexionAccount } = require('./controllers/user')
const {CreateSession, DeleteSession} = require('./controllers/sessions')

const jwt = require('jsonwebtoken');

// initialisation body parser pour récupérer donné au format json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// initialisation cookie parser pour récupérer les cookies
app.use(cookieParser());

// configuration CORS
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);

const db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5rx1a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use('/create_account', CreateAccount)

app.use('/connexion', ConnexionAccount)

app.use('/test', (req, res, next) => {
    res.send("test OK")
})

app.use('/qcm', (req, res, next) => {
    res.status(200).send(QCM.Specialitees)
})

app.use('/create_session', CreateSession)
app.use('/delete_session', DeleteSession)

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
                req._id = decoded._id;
                res.sendStatus(200)
            }
        });
    }
})
module.exports = app;