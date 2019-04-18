const friends = require('../data/friends');


module.exports = function (app) {


    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

 
    app.post('/api/friends', function (req, res) {
        if (req.body) {
            res.json(checkCompatibility(req.body.rawData));
        }
    });

};

function checkCompatibility(arr) {
    let bestScore = Infinity;
    let bestFriend;
    for (let friend of friends) {
        let totalDifference = 0;
        for (let i = 0; i < friend.scores.length; i++) {
            totalDifference += Math.abs(friend.scores[i] - arr[i]);
        }
        if (totalDifference < bestScore) {
            bestScore = totalDifference;
            bestFriend = friend;
        }
    }
    return bestFriend;
}

