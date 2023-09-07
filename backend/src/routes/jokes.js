const express = require('express');
const catchAsyncErrors = require('../app/middlewares/catchAsyncErrors');
const JokeController = require('../app/controllers/JokeController');

const router = express.Router();

router.get('/', catchAsyncErrors(JokeController.getJokes));
router.post('/vote', catchAsyncErrors(JokeController.voteJoke));

module.exports = router;
