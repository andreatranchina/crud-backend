const { Sequelize } = require('sequelize');
const {name} = require('../package.json');
const pg = require('pg');
//name === crud-backend

const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require", {
    logging: false,
});

module.exports = db;