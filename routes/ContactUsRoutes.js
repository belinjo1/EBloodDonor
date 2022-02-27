const express = require("express");
const contactUs = require("../controllers/ContactUsController");
const authController = require("../controllers/authController");
const router = express.Router();


router
    .route("/")
    .get(
        authController.protect,
        authController.restrictTo('admin'),
        contactUs.getAllContactUsMessages)
    .post(
        contactUs.sendContactMessage
    )


router.route("/:id")
    .delete(
        authController.protect,
        authController.restrictTo("admin"),
        contactUs.deleteMessage
    );
module.exports = router;
