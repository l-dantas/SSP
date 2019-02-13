const r_posts = require('./r_posts');

module.exports = (app, db) => {
    app.get('/', (req, res) => {
        // página inical com alguns avisos, antes de entrar no SSP!
        res.send('hello');
    });

    r_posts(app, db);
};