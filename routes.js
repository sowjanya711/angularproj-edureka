var express = require('express');
var app = express();
var db = require('./server/models/index.js');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.route('/')
    .get(function(req, res) {
          res.sendFile(__dirname + '/index.html');
});

// USERS section REST APIs
app.route('/addcandidate').post(db.addcandidate);
app.route('/deletecandidate').post(db.deletecandidate);
app.route('/editcandidate').post(db.editcandidate);

// ADMIN section REST APIs
app.route('/admin/candidates').get(db.getAllcandidates);

// Routes Test
app.route('/testroute/:username')
    .get(function(req, res) {
        var user_name = (req.query.username);
        var user_name = (req.params.username);
        res.send("Hi, "+user_name+" Welcome to Edureka");
});
app.route('*')
    .get(function(req, res) {
        res.redirect('/');
});
module.exports = app;