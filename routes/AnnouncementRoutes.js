const express = require("express");
const announcementController = require("../controllers/announcementController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/getAnnouncement/:id", announcementController.getAnnouncement);
router.post("/updateAnnouncement", 
authController.protect,
authController.restrictTo("admin"),
announcementController.updateAnnoucement)

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    announcementController.createAnnouncement
  )
  
  router.route('/:id')
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    announcementController.deleteAnnouncement
  );

module.exports = router;
