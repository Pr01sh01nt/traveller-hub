const express = require('express');
const router = express.Router();
const author_controller = require('../controller/authController');

const authorization = require('../middlewares/authorization.middleware.js');
const upload = require('../middlewares/multer.middleware.js').upload;

router.post("/register", author_controller.register);

router.post("/login", author_controller.login);

router.post("/editProfile", authorization, author_controller.editProfile);

router.get("/", authorization, author_controller.getProfile);

router.post("/dashboardImage", upload.any(), authorization,  author_controller.dashBoardImage);

router.post("/profilePic", upload.any(), authorization, author_controller.profileImage);

module.exports = router;