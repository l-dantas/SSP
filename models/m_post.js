const Sequelize = require('sequelize');

const db = require('../config/database');
const Commentary = require('./m_comentary');


const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },
    author:{
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
    description:{
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true,
        },
    },  
});

Post.hasMany(Commentary);

module.exports = Post;