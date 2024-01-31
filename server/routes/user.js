const express = require('express');
const router = express.Router();
const imageModel = require('../models/imageModel');


router.get("/home",async(req,res)=>{
    
    try{
        const images = await imageModel.find({userId : req.body.userId},{ imageId:1, description:1,placeOfJourney:1});
        console.log(images);
        res.status(200).json(images);
        
    }catch(err)
    {
        console.log(err);
        res.status(500).json({isValid: true}); // since user has passed the authorization middlewhere so isValid : true
    }
    
    
})

router.post("/myjourney", async(req,res)=>{ 
    
    try{
        console.log(req.body);
        const journeyData = new imageModel(req.body);   
        await journeyData.save();
        
        res.status(201).json("saved");
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
})



router.get("/*",(req,res)=>{
    res.status(200).json();
});
module.exports = router;