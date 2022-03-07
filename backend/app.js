const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
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

app.get('/',(req,res,next)=>{
    res.send('hey')
})

module.exports = app;