const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = Express();
const db = require('./config/database');
const Post = require('./models/m_post');
const Commentary = require('./models/m_comentary');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// autenticando o database
db.authenticate()
    .then((err) => {
        Commentary.sync();
        Post.sync();
        console.log('Authenticate database with success!');
    })
    .catch((err) => {
        console.error('Database: ' + err);
    });

// routes
require('./routes')(app, db);

module.exports = app;

