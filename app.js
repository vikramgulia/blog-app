var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/popper.js/dist'));
app.use(express.static('node_modules/jquery/dist'));

var db = require('./db');

app.get('/', (req, res) => {
    const posts = db.getPosts();
    const authors = db.getAuthors();
    res.render('index', {
        title: 'The Technical Journal',
        bodyClass: 'landing-page',
        posts: posts,
        authors: authors
    })
});

app.get('/authors/:author_id', (req, res) => {
    const author_id = req.params.author_id;
    console.log(`pulling profile page for - `, req.params);
    const author = db.getAuthors().find(a => a.id === author_id);
    res.render('profile', {
        author,
        bodyClass: 'profile-page',
    });
});

app.listen(3000, () => {
    console.log('Chat App running on port 3000');
});