const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');
const upload = require('../middlewares/multer.middleware.js').upload;


router.get("/home", user_controller.userHome);

router.post("/myjourney", upload.any() ,user_controller.userJourney);

router.get("/editjourney", user_controller.userEditJourney);

router.get("/deletejourney", user_controller.userDeleteJourney);

router.post("/editpost", user_controller.editJourney);

router.post("/deleteimages", user_controller.deleteImages);

router.post("/addimages", upload.any(), user_controller.addImages);

router.get("/getimages", user_controller.getImages);

router.get("/*",(req,res)=>{
    res.status(200).json();
});
module.exports = router;