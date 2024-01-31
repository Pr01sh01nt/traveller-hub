const express = require('express');
const router = express.Router();
const author_controller = require('../controller/authController');

router.post("/register", author_controller.register);

router.post("/login", author_controller.login);



module.exports = router;