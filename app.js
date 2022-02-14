const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const userRouter = require('./Routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//security
app.use(helmet());


var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
    credentials: true, 
    exposedHeaders: ['*', 'Authorization' ]
}

//security
app.use(helmet());

//cors
app.use(cors(corsOptions));


//morgan, logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//security
const Ratelimiter = rateLimit({
    max: 1000, //max 1000 requests allowed per ip
    windowMs: 60 * 60 * 1000, // 100 reqs for 1 hr
    message: 'To many requests from this ip, try again in 1 hr!'
});

app.use('/api', Ratelimiter);

//body parser
app.use(express.json({ limit: '12kb' }));

// middleware to serve static files
app.use(express.static(`${__dirname}/public`));

//show request time
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.headers);
    next();
})

//setting routes
app.use('/api/v1/users', userRouter);

//error when requesting undefined routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler);

module.exports = app;

