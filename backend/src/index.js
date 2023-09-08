const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const connectDatabase = require('./db');
const route = require('./routes');
const ErrorHandler = require('./app/middlewares/error');

const app = express();

// Using cors
app.use(cors({ origin: 'https://deploy-joke.vercel.app/', credentials: true }));

// Add cookie
app.use(cookieParser());

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Config path
require('dotenv').config({ path: './src/config/.env' });

// Connect to database
connectDatabase();

app.get('/', (req, res) => {
    res.json('Welcome to the Joke API!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});

// Routes
route(app);

// It's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
