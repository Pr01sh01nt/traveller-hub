const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');


router.get("/home", user_controller.userHome);

router.post("/myjourney", user_controller.userJourney);



router.get("/*",(req,res)=>{
    res.status(200).json();
});
module.exports = router;