const Appointment = require("./../models/appointmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createAppointment = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.create({
    date: req.body.date,
    user: req.body.user,
  });

  res.status(200).json({
    status: "success",
    message: {
      appointment,
    },
  });
});

//Only for admin
exports.getAllAppointments = catchAsync(async (req, res, next) => {
  const appointments = await Appointment.find();

  res.status(200).json({
    status: "success",
    message: {
      appointments,
    },
  });
});

//Only for Authenticated user
exports.getMyAppointments = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.find({ user: req.user.id });

  res.status(200).json({
    status: "success",
    message: {
      appointment,
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
  const appointment = await Appointment.findById(req.body._id);

  if (appointment.user == req.user.id) {
    await Appointment.findByIdAndDelete(req.body._id);
  } else {
    next(new AppError("Cannot delete appointment", 403));
  }

  res.status(200).json({
    status: "success",
    message: "Appointment Deleted!",
  });
});
