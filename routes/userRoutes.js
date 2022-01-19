const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();


router.param('id', userController.checkId);

router.post('/signup', authController.signup);

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.editUser)
    .delete(userController.deleteUser);

module.exports = router;