const express = require("express");
const announcementController = require("../controllers/announcementController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/getAnnouncement/:id", announcementController.getAnnouncement);

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    announcementController.createAnnouncement
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    announcementController.updateAnnoucement
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    announcementController.deleteAnnouncement
  );

module.exports = router;
