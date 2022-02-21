const express = require("express");
const announcementController = require("../controllers/announcementController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get(
  "/getAllAnnouncements",
  announcementController.getAllAnnouncements
);
router.get(
  "/getAnnouncement/:id",
  announcementController.getAnnouncement
);

router.post(
  "/createAnnouncement",
  authController.protect,
  authController.restrictTo("admin"),
  announcementController.createAnnouncement
);

router.patch(
  "/updateAnnoucement",
  authController.protect,
  authController.restrictTo("admin"),
  announcementController.updateAnnoucement
);
router.delete(
  "/deleteAnnouncement",
  authController.protect,
  authController.restrictTo("admin"),
  announcementController.deleteAnnouncement
);

module.exports = router;