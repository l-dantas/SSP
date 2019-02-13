const Sequelize = require('sequelize');


module.exports = new Sequelize('sqlite:' + __dirname + '/db.sqlite');
