var posts = require('./posts')
var authors = require('./authors')

var db = {};

// console.log(posts);
// console.log(authors);

db.getPosts = function () {
    return posts;
};

db.getPost = function (id) {
    return posts.filter(p => p.id === id);
};

db.getAuthors = function(){
    return authors;
};

module.exports = db;