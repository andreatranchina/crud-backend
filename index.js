//npm install express, nodemon, body-parser, pg, pg-hstore, sequelize,
//modifications for vercel made
const express = require ('express');
const db = require('./db');
const bodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors');
const app = express();
const pg = require('pg');


//Middleware and mounting on API
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: 'https://64a87a606a675c0f1ec4cb45--sparkly-daifuku-f0cc8c.netlify.app'}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(express.json());
app.use('/api', require('./api'));


//syncing DB function
// use {force: true} to drop the tables and starts from scratch (then re-seed)
// const syncDB = () => db.sync( {force: true });
const syncDB = () => db.sync();

//Run server function
const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}


syncDB();
serverRun();

module.exports = app;
