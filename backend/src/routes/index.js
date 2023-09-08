const jokeRouter = require('./jokes');

const route = (app) => {
    app.use('/api/v2/joke', jokeRouter);
};

module.exports = route;
