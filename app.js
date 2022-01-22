const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const userRouter = require('./Routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//1) middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const Ratelimiter = rateLimit({
    max: 50, //max 100 requests allowed per ip
    windowMs: 60 * 60 * 1000, // 100 reqs for 1 hr
    message: 'To many requests from this ip, try again in 1 hr!'
});

app.use('/api', Ratelimiter);

app.use(express.json());

//2 middleware to serve static files
app.use(express.static(`${__dirname}/public`));


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.headers);
    next();
})

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler);



module.exports = app;

