const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["approved", "pending", "declined"],
    default: "pending",
  },

  user: {
    type: String,
    // required: true,
    lowercase: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
