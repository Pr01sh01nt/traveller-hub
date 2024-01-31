const express = require('express');
const router = express.Router();
const imageModel = require('../models/imageModel');
const people_controller = require('../controller/peopleController');


router.get("/experiances",people_controller.peopleExperinces);


router.get("/*",(req,res)=>{
    res.status(200).json();
});


module.exports = router;