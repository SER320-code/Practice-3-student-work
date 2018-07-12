var express = require('express');
var bodyParser = require('body-parser')
var app = express();
 
var hbs = require('hbs');
 
var blogEngine = require('./blog');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.json());
 
app.get('/', function(req, res) {
    res.render('index',{title:"My Blog", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
    res.render('about', {title:"About Me"});
});
 
app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article',{title:entry.title, blog:entry});
});
 
app.listen(3000);