const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        votes: [
            {
                userId: {
                    type: String,
                },
                like: {
                    type: Boolean,
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Joke', jokeSchema);
