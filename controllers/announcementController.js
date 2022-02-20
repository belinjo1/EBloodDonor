const Announcement = require("../models/announcementModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAnnouncements = catchAsync(async (req, res, next) => {
  const announcements = await Announcement.find({ user: req.user.id });

  res.status(200).json({
    status: "success",
    message: {
      announcements,
    },
  });
});

exports.getAllAnnouncements = catchAsync(async (req, res, next) => {
  const announcements = await Announcement.find();

  res.status(200).json({
    status: "success",
    message: {
      announcements,
    },
  });
});

exports.createAnnouncement = catchAsync(async (req, res, next) => {
  const announcement = await Announcement.create({
    title: req.body.title,
    text: req.body.text,
    city: req.body.city,
    bloodtype: req.body.bloodtype,
  });

  res.status(200).json({
    status: "success",
    message: {
      announcement,
    },
  });
});

exports.updateAnnoucement = catchAsync(async (req, res, next) => {
  await Announcement.findByIdAndUpdate(req.body._id, {
    title: req.body.title,
    text: req.body.text,
    city: req.body.city,
    bloodtype: req.body.bloodtype,
  });

  res.status(200).json({
    status: "success",
    message: "Annoucement changed!",
  });
});

exports.deleteAnnouncement = catchAsync(async (req, res, next) => {
  await Announcement.findByIdAndDelete(req.body._id);
  res.status(200).json({
    status: "success",
    message: "Announcement Deleted!",
  });
});
