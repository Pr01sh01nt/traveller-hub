const express = require('express');
const router = express.Router();
const imageModel = require('../models/imageModel');


router.get("/experiances", async(req,res)=>{
    const jump = req.query.jump;
    console.log(req.query);
    try{
        console.log(jump ,"skip of");
        
        let data = 0;
        if(req.query.search=='')
         data = await imageModel.find().sort('userId').skip(jump).limit(4);
        else  
        data = await imageModel.find({placeOfJourney : req.query.search}).sort('userId').skip(jump).limit(4);
        console.log(data);
        res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
    
  
    
})


router.get("/*",(req,res)=>{
    res.status(200).json();
});


module.exports = router;