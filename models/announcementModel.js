const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const announcementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    enum: [
      "Prishtinë",
      "Mitrovicë",
      "Pejë",
      "Prizren",
      "Ferizaj",
      "Gjilan",
      "Gjakovë",
    ],
    default: "Prishtinë",
  },

  bloodtype: {
    type: String,
    enum: ["0-", "0+", "A-", "A+", "B+", "B-", "AB-", "AB+"],
    default: "A+",
  },

  image: {
    data: Buffer,
    contentType: String
  }

});

announcementSchema.virtual('appointments', {
  ref: 'Appointment', //The Model to use
  localField: '_id', //Find in Model, where localField 
  foreignField: 'announcement', // is equal to foreignField
});

// Set Object and Json property to true. Default is set to false
announcementSchema.set('toObject', { virtuals: true });
announcementSchema.set('toJSON', { virtuals: true });

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
