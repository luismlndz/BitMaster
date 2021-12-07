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

//Retrive a random easy Javascript question
router.get('/JavaScript/easy', (_req, res) => {
    const easy = questionsData.filter((question) => {
        return question.difficulty === 'easy' && question.language === 'JavaScript';
    })
    const random = Math.floor(Math.random() * easy.length);
    const randomQuestion = easy[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random medium Javascript question
router.get('/JavaScript/medium', (_req, res) => {
    const medium = questionsData.filter((question) => {
        return question.difficulty === 'medium' && question.language === 'JavaScript';
    })
    const random = Math.floor(Math.random() * medium.length);
    const randomQuestion = medium[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random hard Javascript question
router.get('/JavaScript/hard', (_req, res) => {
    const hard = questionsData.filter((question) => {
        return question.difficulty === 'hard' && question.language === 'JavaScript';
    })
    const random = Math.floor(Math.random() * hard.length);
    res.json(hard[random]);
})

//Retrive a random easy Java question
router.get('/Java/easy', (_req, res) => {
    const easy = questionsData.filter((question) => {
        return question.difficulty === 'easy' && question.language === 'Java';
    })
    const random = Math.floor(Math.random() * easy.length);
    const randomQuestion = easy[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random medium Java question
router.get('/Java/medium', (_req, res) => {
    const medium = questionsData.filter((question) => {
        return question.difficulty === 'medium' && question.language === 'Java';
    })
    const random = Math.floor(Math.random() * medium.length);
    const randomQuestion = medium[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random hard Java question
router.get('/Java/hard', (_req, res) => {
    const hard = questionsData.filter((question) => {
        return question.difficulty === 'hard' && question.language === 'Java';
    })
    const random = Math.floor(Math.random() * hard.length);
    res.json(hard[random]);
})

//Retrive a random easy Python question
router.get('/Python/easy', (_req, res) => {
    const easy = questionsData.filter((question) => {
        return question.difficulty === 'easy' && question.language === 'Python';
    })
    const random = Math.floor(Math.random() * easy.length);
    const randomQuestion = easy[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random medium Python question
router.get('/Python/medium', (_req, res) => {
    const medium = questionsData.filter((question) => {
        return question.difficulty === 'medium' && question.language === 'Python';
    })
    const random = Math.floor(Math.random() * medium.length);
    const randomQuestion = medium[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random hard Python question
router.get('/Python/hard', (_req, res) => {
    const hard = questionsData.filter((question) => {
        return question.difficulty === 'hard' && question.language === 'Python';
    })
    const random = Math.floor(Math.random() * hard.length);
    res.json(hard[random]);
})

//Retrive a random easy C question
router.get('/C/easy', (_req, res) => {
    const easy = questionsData.filter((question) => {
        return question.difficulty === 'easy' && question.language === 'C';
    })
    const random = Math.floor(Math.random() * easy.length);
    const randomQuestion = easy[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random medium C question
router.get('/C/medium', (_req, res) => {
    const medium = questionsData.filter((question) => {
        return question.difficulty === 'medium' && question.language === 'C';
    })
    const random = Math.floor(Math.random() * medium.length);
    const randomQuestion = medium[random];
    questionsData = questionsData.filter((question) => {
        return question !== randomQuestion
    })
    res.json(randomQuestion);
})

//Retrive a random hard C question
router.get('/C/hard', (_req, res) => {
    const hard = questionsData.filter((question) => {
        return question.difficulty === 'hard' && question.language === 'C';
    })
    const random = Math.floor(Math.random() * hard.length);
    res.json(hard[random]);
})

module.exports = router;