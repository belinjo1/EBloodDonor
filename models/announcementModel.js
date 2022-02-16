const mongoose = require("mongoose");

const announcmentSchema = mongoose.Schema({
  tittle: {
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
    required,
    default: "Prishtinë",
  },

  bloodtype: {
    type: String,
    enum: ["0-", "0+", "A-", "A+", "B+", "B-", "AB-", "AB+"],
    default: "A+",
  },

  participants: {
    type: Array,
    required,
  },
});

const Announcement = mongoose.model("Announcment", announcmentSchema);

module.exports = Announcement;
