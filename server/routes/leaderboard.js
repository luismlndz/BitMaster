const express = require('express');
const router = express.Router();
const fs = require('fs');

let leaderboardData = [];

//Read data from json
getLeaderboard = () => {
    fs.readFile('./data/leaderboard.json', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        leaderboardData = JSON.parse(data);
    })
}

//Invoke
getLeaderboard();

//Retrive data for sorted leaderboard
router.get('/', (_req, res) => {
    leaderboardData.sort((x, y) => {
       return y.score - x.score;
    });
    res.json(leaderboardData);
})

//Post new leaderboard entry
router.post('/', (req, res) => {
    const { username, score } = req.body;

    if(!username || !score) {
        res.status(400).send('Please provide a username and score in your body');
    }

    const newEntry = {
        username: username,
        score: score
    }
    leaderboardData.push(newEntry);

    fs.writeFile('./data/leaderboard.json', JSON.stringify(leaderboardData), (err) => {
        if(err)
            res.status(500).send(err);

        console.log('Leaderboard entry uploaded successfully');
        res.status(201).json(newEntry);
    })

})

module.exports = router;