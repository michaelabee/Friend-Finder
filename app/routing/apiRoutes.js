var express = require('express');
var path = require('path');

var app = express();
// GET ROUTE FRIENDS
app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "?????"));
    //what do I put in place of the ????? There isn't an html page for displaying the friends specifically. Am I supposed
    //to use the survey.html and update it dynamically using javascript?
  });
// POST ROUTE FRIENDS (ALSO HANDLES COMPATABILITY LOGIC)