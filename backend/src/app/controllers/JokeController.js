const ErrorHandler = require('../../utils/ErrorHandler');
const Joke = require('../model/joke');
const User = require('../model/user');

class JokeController {
    // [GET] /joke
    async getJokes(req, res, next) {
        try {
            const { id: userId } = req.query;
            let user = null;

            if (!userId) {
                user = await User.create({
                    votes: [],
                    currentVote: null,
                });
            } else {
                user = await User.findById(userId);
                if (!user) {
                    return next(new ErrorHandler('User not found!'), 400);
                }
            }

            const joke = await Joke.findOne({
                _id: { $nin: [...user.like, ...user.dislike] },
            });

            res.status(200).json({
                success: true,
                joke,
                token: user._id,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }

    // [POST] /joke/vote
    async voteJoke(req, res, next) {
        try {
            const { vote, currentVote, userId } = req.body;

            if (!userId) {
                return next(new ErrorHandler('User not found!'), 400);
            }

            const user = await User.findById(userId);
            if (vote) {
                user.like.push(currentVote);
            } else {
                user.dislike.push(currentVote);
            }
            user.currentVote = currentVote;

            await user.save();

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
