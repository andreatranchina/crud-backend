const { DataTypes } = require('sequelize');
const db = require('../db');

//define takes in name of model, and then an object for each column of table
const Campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
    },
    imageUrl: {
        type: DataTypes.STRING(1000),
        defaultValue: "https://i0.wp.com/cfe.umich.edu/wp-content/uploads/2015/09/blank-profile.jpg?fit=4016%2C2677&ssl=1"
    },
    address: {
        type: DataTypes.STRING(1000),
        allownull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allownull: false
    },
})

module.exports = Campus;
