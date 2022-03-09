const Announcement = require("../models/announcementModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const fs = require("fs");

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
  
});

exports.createAnnouncement = catchAsync(async (req, res, next) => {
  // console.log('\n\n\n----------debug------------\n');
  // console.log(req.body);
  // console.log(req.files);
  // console.log('\n----------------------------------\n\n\n');
  
  var announcement = {
    title: req.body.title,
    text: req.body.text,
    city: req.body.city,
    bloodtype: req.body.bloodtype,
    image: {}
  }

  //if image is sent than save it on announcement.image as data buffer
  if(req.files != null){
    announcement.image = {
      data: req.files.image.data,
      contentType: req.files.image.mimetype
    }
  }

  const result = await Announcement.create(announcement);

  res.status(200).json({
    status: "success",
    message: {
      result,
    },
  });
});

exports.updateAnnoucement = catchAsync(async (req, res, next) => {

  var announcement = {
    title: req.body.title,
    text: req.body.text,
    city: req.body.city,
    bloodtype: req.body.bloodtype,
  }

  if(req.files != null){
    //if image is uploaded
    announcement.image = {
      data: req.files.image.data,
      contentType: req.files.image.mimetype
    }
  }

  //if image is removed change announcement image to empty object
  if(req.body.imageRemoved) announcement.image = {}
  
  const result = await Announcement.findByIdAndUpdate(req.body._id, announcement);
  
  res.status(200).json({
    status: "success",
    message: result,
  });
});

exports.deleteAnnouncement = catchAsync(async (req, res, next) => {
  await Announcement.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Announcement Deleted!",
  });
});