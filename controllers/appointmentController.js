const Appointment = require("./../models/appointmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.create({
    date: req.body.date,
    user: req.body.user,
    announcement: req.body.announcement
  });

  res.status(200).json({
    status: "success",
    data: {
      appointment,
    },
  });
});

//Only for admin
exports.getAllAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find().populate('user').populate('announcement');

  res.status(200).json({
    status: "success",
    data: {
      appointments,
    },
  });
});

//Only for Authenticated user
exports.getMyAppointments = catchAsync(async (req, res, next) => {
  
  const appointments = await Appointment.find({ user: req.user.id }).populate('user').populate('announcement');;

  res.status(200).json({
    status: "success",
    data: {
      appointments,
    },
  });
});

// for admin to change appointment's status
exports.updateAppointment = catchAsync(async (req, res, next) => {
  await Appointment.findByIdAndUpdate(req.body._id, {
    status: req.body.status,
  });

  res.status(200).json({
    status: "success",
    message: "Status changed!",
  });
});

exports.deleteMyAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Appointment Deleted!",
  });
});
