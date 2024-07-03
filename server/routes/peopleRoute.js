const express = require('express');
const router = express.Router();
const imageModel = require('../models/imageModel');
const people_controller = require('../controller/peopleController');


router.get("/experiances",people_controller.peopleExperinces);

router.get("/experiance/comment", people_controller.getComments);

router.post("/experiance/comment", people_controller.postComments);

router.get("/", people_controller.getProfile);

router.get("/*",(req,res)=>{
    res.status(200).json();
});


module.exports = router;