const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
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

    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            user: user
        }
    });
});

exports.editUser = catchAsync(async (req, res, next) => {

    const filteredBody = filterObj(req.body, 'name', 'email', 'bloodtype', 'role');
    const updatedUser = await User.findByIdAndUpdate(req.body._id, filteredBody,
        {
            new: true,
            runValidators: true
        });
    if(updatedUser == null){
        res.status(200).json({
            status: 'fail',
            error: {
                message: "Couldn't find user!"
            }
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    })
    
});

exports.deleteUser = catchAsync(async (req, res, next) => {

    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: 'success',
        message: 'User Deleted!'
    })
});

exports.UpdateMe = catchAsync(async (req, res, next) => {
    //1 Error if user posts password data
    if (req.body.password || req.body.passwordConfirm) {
        next(new AppError('This route is not for password updates, use /updateMyPassword', 404));
    }

    //update user doc
    //filtered out unwanted body field names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email', 'bloodtype');
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody,
        {
            new: true,
            runValidators: true
        });

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    })


});