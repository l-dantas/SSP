const m_post = require('../models/m_post');
const m_commentary = require('../models/m_comentary');


module.exports = (app, db) => {
    app.route('/post')
        .get((req, res) => {
            m_post.findAll({ order: [
                ['createdAt', 'DESC']
            ]}).then((post) => {
                    res.send(post);
                })
                .catch((err) => {
                    console.error(`Error to show every posts: ${err}`);
                })
        })
        .post((req, res) => {
            const data = {
                title: req.body.title,
                author: req.body.author,
                email: req.body.email,
                description: req.body.description,
            };

            let { title, author, email, description } = data;
            m_post.create({ title, author, email, description })
                .then((post) => {
                    res.send(`Create post with success!`);
                })
                .catch((err) => {
                    console.error(`Error to create a Post: ${err}`);
                    res.send(`Error to create a new Post`);
                });
        });
    
    // URL with ID
    app.route('/post/:id')
        .get((req, res) => {
            let id = req.params.id;
            let completePost = {
                post: null,
                comments: null
            };            
            // Recuperando um post pelo ID
            m_post.findOne({ where: { id : id }})
                .then((post) => {

                    if(!completePost) {
                        res.status(404).send(`Post doesn't exist`);
                    }

                    completePost.post = post;

                    // recuperando todos os comentários do post acima
                    m_commentary.findAll({ where: { postId: post.id }})
                        .then((comments) => {
                            let listcomments = [];

                            for(let i = 0; i < comments.length; i++) {
                                listcomments.push(comments[i]['dataValues']);
                            }
                            completePost.comments = listcomments;
                            res.send(completePost);

                        }).catch(err => {
                            console.error(`Error get comments by id of post: ${err}`)
                        });

                })
                .catch((err) => {
                    console.error(`Error get post by id: ${err}`)
                });
        })
        .post((req, res) => {
            const data = {
                author: req.body.author,
                email: req.body.email,
                subject: req.body.subject,
                commentary: req.body.commentary,
                postId: req.params.id,  
            };

            let { author, email, subject, commentary, postId } = data;

            m_commentary.create({ author, email, subject, commentary, postId })
                .then(() => {
                    res.send(`commented with success!`);
                })
                .catch((err) => {
                    console.error(`Error to create a Post: ${err}`);
                    res.send(`Error to create a new Post`);
                });
            
        })
        .put((req, res) => {
            // não haverá necessidade de ter essa rota para esse projeto!
            let id = req.params.id;
            const data = {
                title: req.body.title,
                author: req.body.author,
                email: req.body.email,
                description: req.body.description,
            };

            let { title, author, email, description } = data;

            m_post.update({ title, author, email, description }, { where: { id: id }, })
                .then((item) => {
                    res.send(`Update with success!`);
                    console.log('Success!');
                }).catch(err => {
                    console.error(err);
                })
        })
        .delete((req, res) => {
            // não haverá necessidade de ter essa rota para esse projeto!
            let id = req.params.id;
            m_post.destroy({ where: { id : id }, })
                .then((item) => {
                    res.send('Delete with success!');
                })
                .catch((err) => {
                    console.error(`Error delete the Post: ${err}`);
                });
        })
};