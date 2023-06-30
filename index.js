//npm install express, nodemon, body-parser, pg, pg-hstore, sequelize,
const express = require ('express');
const db = require('./db');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();


//Middleware and mounting on API
// app.use(bodyParser.urlencoded({extended: true}));
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