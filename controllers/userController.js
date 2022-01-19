const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');


exports.checkId = (req, res, next, val) => {
    const user = users.find(el => el._id == val);
    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }
    next();
}


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
    res.status(500).json({
        status: 'error',
        message: 'Not implemented'
    });
});

exports.editUser = catchAsync(async (req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'Not implemented'
    })
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'Not implemented'
    })
});
