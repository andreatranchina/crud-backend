const { DataTypes } = require('sequelize');
const db = require('../db');

//define takes in name of model, and then an object for each column of table
const Student = db.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },      
    imageUrl: {
        type: DataTypes.STRING(1000),
        defaultValue: "https://i0.wp.com/cfe.umich.edu/wp-content/uploads/2015/09/blank-profile.jpg?fit=4016%2C2677&ssl=1"
    },
    gpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
        valdate: {
            isNumeric: true,
            min: 0,
            max: 4,
            notNull: true,
            notEmpty: true,
        }
    },
})

module.exports = Campus;