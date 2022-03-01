const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, appointmentController.getMyAppointments)
  .post(authController.protect, appointmentController.createAppointment)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    appointmentController.updateAppointment
  );

router.get("/getAllAppointments", appointmentController.getAllAppointments);
router
  .route("/:id")
  .delete(authController.protect, appointmentController.deleteMyAppointment);

module.exports = router;
