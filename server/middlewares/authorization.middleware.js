const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();

  
router.use('*', (req, res, next)=>{
    console.log(req.originalUrl);

    try{
        const cookie = req.cookies[process.env.AUTH_COOKIE];

        console.log(req.cookies);
        const verifiction = jwt.verify(cookie,process.env.JWT_SECRET); 
        console.log(verifiction);
        req.userId = verifiction.token;  
        req.body.userId = verifiction.token;  
        
        // console.log(req.body,"from auth middlewhere"); 
        next();


    }catch(err){
        console.error(err);
        res.status(400).json({isValid : false});
    }
})




module.exports = router;