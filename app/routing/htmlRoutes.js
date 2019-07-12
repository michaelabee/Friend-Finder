var express = require('express');
var path = require('path');
var app = express();
var PORT = 8080;

module.exports = function(app) {

    
    app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
    console.log(__dirname);
});
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


};

// C:\Users\Michaela\Desktop\Repositories\homework\Friend-Finder\app\routing