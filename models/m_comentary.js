const Sequelize = require('sequelize');

const db = require('../config/database');


const Commentary = db.define('commentary', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    subject: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },
    commentary: {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true,
        },
    },
});


module.exports = Commentary;