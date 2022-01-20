const { promisify } = require('util');
const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const crypto = require('crypto');


const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};



exports.signup = catchAsync(async (req, res, next) => {

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
        role: req.body.role,
        bloodtype: req.body.bloodtype
    });

    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    // 3) If everything ok, send token to client
    const token = signToken(user._id);
    res.status(201).json({
        status: 'success',
        token
    });
});

exports.protect = catchAsync(async (req, res, next) => {
    //1 get token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You need to log in to view this content!', 401));
    }

    //2 validate token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //3 check if user still exists

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('The user belonging to this token does no longer exist.', 401));
    }

    //4 check if user changed pw after jwt token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(
            new AppError('User recently changed password! Please log in again.', 401)
        );
    }

    //give access 
    req.user = currentUser;
    next();
})

exports.restrictTo = (...roles) => { //roles now is an array
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have premission to perform this action!', 403));
        }
        next();
    }
}

exports.forgotPassword = catchAsync(async (req, res, next) => {
    //1 get user based on posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError('User does not exist!', 404));
    }

    //2 generate random reset token.
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    //3 send it to user's email
    //reset url
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassowrd/${resetToken}`;

    const message = `Forgot your password? Submit a request with your new password and password confirm
    to: ${resetURL}. \nIf you did not request for a password change, please ignore this email!`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token! (valid for 10 min!)',
            message
        });

        res.status(200).json({
            status: 'success',
            message: 'Token sent!'
        })
    }
    catch (err) {
        user.createPasswordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false })

        return next(new AppError('There was an error sending email, Try again later!', 500));
    }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
    //1 get user based on the token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });

    console.log(user.email)
    if (!user) {
        return next(new AppError('Token INVALID!', 400));
    }

    //2 if token not expired and user exist set password
    //3 update changedpasswordat

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetExpires = undefined;
    user.passwordResetToken = undefined;
    await user.save();

    console.log('passed initialising');
    //4 log the user in, send jwt
    const token = signToken(user._id);

    res.status(201).json({
        status: 'success',
        token
    });

});