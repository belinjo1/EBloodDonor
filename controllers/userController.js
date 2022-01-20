const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');


exports.getAllUsers = catchAsync(async (req, res, next) => {


    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });

});

exports.createUser = catchAsync(async (req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'Not implemented'
    });
});

exports.getUser = catchAsync(async (req, res, next) => {

    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        message: {
            user: user
        }
    });
});

exports.editUser = catchAsync(async (req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'Not implemented'
    })
});

exports.deleteUser = catchAsync(async (req, res, next) => {

    const user = await User.findByIdAndDelete(req.params.id);

    res.status(500).json({
        status: 'error',
        message: 'User Deleted!'
    })
});
