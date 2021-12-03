const express = require('express');
const app = express();
const cors = require('cors');
const questionsRoute = require('./routes/questions');
const leaderboardRoute = require('./routes/leaderboard');

require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use('/questions', questionsRoute);
app.use('/leaderboard', leaderboardRoute);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})