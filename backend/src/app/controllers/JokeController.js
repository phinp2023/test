const ErrorHandler = require('../../utils/ErrorHandler');
const Joke = require('../model/joke');
const User = require('../model/user');

class JokeController {
    // [GET] /joke
    async getJokes(req, res, next) {
        try {
            const { id_user } = req.cookies;

            let user = null;

            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                sameSite: 'none',
                // secure: true,
                domain: '.vercel.app',
            };

            if (!id_user) {
                user = await User.create({
                    votes: [],
                    currentVote: null,
                });

                // save id user in cookie
                res.cookie('id_user', user._id.toString(), options);
            } else {
                user = await User.findById(id_user);

                if (!user) {
                    options.expires = new Date(Date.now());

                    res.cookie('id_user', null, options);

                    return next(new ErrorHandler('User not found!'), 400);
                }
            }

            const joke = await Joke.findOne({
                _id: { $nin: [...user.like, ...user.dislike] },
            });

            if (!joke) {
                return next(new ErrorHandler('Joke not found!'), 400);
            }

            res.status(200).json({
                success: true,
                joke,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    }

    // [POST] /joke/vote
    async voteJoke(req, res, next) {
        try {
            const { vote, currentVote } = req.body;
            const { id_user } = req.cookies;

            if (!id_user) {
                return next(new ErrorHandler('User not found!'), 400);
            }

            const user = await User.findById(id_user);
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
