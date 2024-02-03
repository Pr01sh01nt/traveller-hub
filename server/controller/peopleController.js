const imageModel = require('../models/imageModel');

exports.peopleExperinces = async(req,res)=>{
    const jump = req.query.jump;
    console.log(req.query);
    try{
        console.log(jump ,"skip of");
        
        let data = 0;
        if(req.query.search=='')
         data = await imageModel.find({type:"public"}).sort('userId').skip(jump).limit(4);
        else  
        data = await imageModel.find({placeOfJourney : req.query.search, type:"public"}).sort('userId').skip(jump).limit(4);
        console.log(data);
        res.status(200).json(data);
    }catch(err){
        console.log(err);

        res.status(500).json({});
    }
    
   
    
};
