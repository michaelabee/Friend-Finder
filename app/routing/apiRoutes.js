var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
  app.get("zebra", function(req, res) {
    res.json(friends);
    //use ajaX call here
  });

  app.post("/polarbear", function(req, res) {
    res.json(friends);
  });

}