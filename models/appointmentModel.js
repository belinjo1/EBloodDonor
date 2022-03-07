const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const appointmentSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["approved", "pending", "declined"],
    default: "pending",
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  announcement: {
    type: Schema.Types.ObjectId,
    ref: 'Announcement',
    required: true
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
