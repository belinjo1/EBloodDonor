const Announcement = require("../models/announcementModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAnnouncement = catchAsync(async (req, res, next) => {
  const announcements = await Announcement.findById(req.params.id).populate({path: 'appointments'});

  res.status(200).json({
    status: "success",
    data: {
      announcements,
    },
  });
});

exports.getAllAnnouncements = catchAsync(async (req, res, next) => {
  const announcements = await Announcement.find().populate({path: 'appointments'});
  
  res.status(200).json({
    status: "success",
    data: {
      announcements
    }
  });

  console.log(announcements)
  
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
  await Announcement.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Announcement Deleted!",
  });
});
