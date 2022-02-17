const mongoose = require("mongoose");

const announcmentSchema = mongoose.Schema({
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
});

const Announcement = mongoose.model("Announcment", announcmentSchema);

module.exports = Announcement;
