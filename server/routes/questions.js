const express = require('express');
const router = express.Router();
const fs = require('fs');

let questionsData = [];

//Read data from json
getQuestions = () => {
    fs.readFile('./data/questions.json', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        questionsData = JSON.parse(data);
    })
}

//Invoke
getQuestions();

//Retrive data for all questions
router.get('/', (_req, res) => {
    res.json(questionsData);
})

//Retrive a random easy question
router.get('/easy', (_req, res) => {
    const easy = questionsData.filter((question) => {
        return question.difficulty === 'easy';
    })
    const random = Math.floor(Math.random() * easy.length);
    res.json(easy[random]);
})

//Retrive a random medium question
router.get('/medium', (_req, res) => {
    const medium = questionsData.filter((question) => {
        return question.difficulty === 'medium';
    })
    const random = Math.floor(Math.random() * medium.length);
    res.json(medium[random]);
})

//Retrive a random hard question
router.get('/hard', (_req, res) => {
    const hard = questionsData.filter((question) => {
        return question.difficulty === 'hard';
    })
    const random = Math.floor(Math.random() * hard.length);
    res.json(hard[random]);
})

module.exports = router;