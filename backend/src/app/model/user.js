const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        like: [String],
        dislike: [String],
        currentVote: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
