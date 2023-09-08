const jokeRouter = require('./jokes');

const route = (app) => {
    app.use('/api/joke', jokeRouter);
};

module.exports = route;
