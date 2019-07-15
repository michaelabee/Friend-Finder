var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      scores: [],
      friendDifference: 55,
    };
    
    var userData = req.body;
    var userScores = userScores.data;

    var totalDifference 

    for (var i=0; i<friends.length; i++) {
      currentFriend = friends[i];
      totalDifference = 0;
    
    console.log(currentFriend.name);

    for (var j=0; j<currentFriend.scores.length; j++){
      currentFriendScore = currentFriend.score[i];
      currentUserScore = currentUser[j];

      Math.abs(parseInt(currentFriendScore)-parseInt(currentUserScore)) = totalDifference; 
    };

    if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = currentFriend.name;
      bestMatch.photo =currentFriend.photo;
      bestMatch.friendDifference = currentFriend.totalDifference;
    }
  };    

    friends.push(userData);

    res.json(bestMatch);

  });

};