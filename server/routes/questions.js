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

//Retrive a random question
router.get('/:language/:difficulty', (req, res) => {
    const questions = questionsData.filter((question) => {
        return question.language === req.params.language && question.difficulty ===  req.params.difficulty;
    })
    const random = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[random];
    // questionsData = questionsData.filter((question) => {
    //     return question !== randomQuestion
    // })
    res.json(randomQuestion);
})

module.exports = router;