var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 40    
        };
        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var totalDifference = 0;
        
        for (var i = 0; i < friends.length - 1; i++) {
            totalDifference = 0;

            for (var k = 0; k < 10; k++) {
                totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));

                if (totalDifference <= bestMatch.scoreDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.scoreDifference = totalDifference;
                }
            }
        }

        friends.push(userData);
        res.json(bestMatch);
    });
};