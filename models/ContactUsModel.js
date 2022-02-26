const mongoose = require("mongoose");

const ContactUsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);

module.exports = ContactUs;