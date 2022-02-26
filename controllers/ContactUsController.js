const ContactUs = require("./../models/ContactUsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.sendContactMessage = catchAsync(async (req, res, next) => {
    const Contact = await ContactUs.create({
        title: req.body.title,
        text: req.body.text,
        email: req.body.email,

    });

    res.status(200).json({
        status: "success",
        message: {
            Contact,
        },
    });
});

//Only for admin
exports.getAllContactUsMessages = catchAsync(async (req, res, next) => {
    const messages = await ContactUs.find();

    res.status(200).json({
        status: "success",
        message: {
            messages,
        },
    });
});

//Only for admin
exports.deleteMessage = catchAsync(async (req, res, next) => {
    await ContactUs.findByIdAndDelete(req.body._id);
    res.status(200).json({
        status: "success",
        message: "Message Deleted!",
    });
});