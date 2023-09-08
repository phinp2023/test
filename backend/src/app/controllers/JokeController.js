const ErrorHandler = require('../../utils/ErrorHandler');
const Joke = require('../model/joke');
const ObjectId = require('mongoose').Types.ObjectId;

class JokeController {
    // [GET] /joke
    async getJokes(req, res, next) {
        try {
            let { id } = req.query;

            if (!id || ObjectId.isValid(id)) id = new ObjectId();

            const joke = await Joke.aggregate([
                { $match: { 'votes.userId': { $nin: [id] } } },
                { $sample: { size: 1 } },
            ]);

            res.status(200).json({
                success: true,
                joke: joke[0],
                id,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }

    // [POST] /joke/vote
    async voteJoke(req, res, next) {
        try {
            const { idJoke, userId, like } = req.body;

            const joke = await Joke.findById(idJoke);
            joke.votes.push({
                userId,
                like,
            });
            joke.save();

            res.status(200).json({
                success: true,
                message: 'This joke is voted!',
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
}

module.exports = new JokeController();
