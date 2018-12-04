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
        title: 'The Technical Journal',
        posts: [
            {
                title: 'Free Chat',
                category: 'Spring',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
            },
            {
                title: 'Verified Users',
                category: 'Java',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
                isFeatured: true
            },
            {
                title: 'Apache Kafka',
                category: 'Kafka',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
            },
            {
                title: 'Redis Demo',
                category: 'Java, Redis',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
                isFeatured: true
            },
            {
                title: 'Fingerprint',
                category: 'Boot',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
            },
            {
                title: 'Express JS',
                category: 'Node, Javascript',
                header: 'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
            }
        ]
    })
});

app.listen(3000, () => {
    console.log('Chat App running on port 3000');
});