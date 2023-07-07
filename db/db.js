const { Sequelize } = require('sequelize');
const {name} = require('../package.json');
const pg = require('pg');
//name === crud-backend

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
    logging: false,
});

module.exports = db;