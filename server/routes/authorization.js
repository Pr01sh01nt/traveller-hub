const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();


router.use('*', (req, res, next)=>{

    try{
        const cookie = req.cookies["accesstoken"];

        console.log(req.cookies);
        const verifiction = jwt.verify(cookie,"@ec%r*i4)V"); 
        console.log(verifiction);
        req.body.userId = verifiction.token;   
        next();


    }catch(err){
        console.error(err);
        res.status(400).json({isValid : false});
    }
})




module.exports = router;