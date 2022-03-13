const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

// import User controllers
const { CreateAccount, ConnexionAccount } = require('./controllers/user')

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


app.get('/create_account', CreateAccount)

app.get('/connexion', ConnexionAccount)


module.exports = app;