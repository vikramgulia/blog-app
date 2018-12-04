var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/popper.js/dist'));
app.use(express.static('node_modules/jquery/dist'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express + Safari'
    })
});

app.listen(3000, () => {
    console.log('Chat App running on port 3000');
});