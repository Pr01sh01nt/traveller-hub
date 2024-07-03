const imageModel = require('../models/imageModel');
const cloudinary = require('../utils/cloudinary');
  
exports.userHome  = async(req,res)=>{
    
    try{
        const images = await imageModel.find({userId : req.body.userId});
        // console.log(images);
        res.status(200).json(images);
        
    }catch(err)
    {
        console.log(err);
        res.status(500).json({isValid: true}); // since user has passed the authorization middlewhere so isValid : true
    } 
    
    
};



exports.userJourney =  async(req,res)=>{ 
    
    try{
        // console.log(req.files, 'files');
        // console.log(req.body,  "body");

        let   Images = [];
        for(let i = 0; i<req.files.length; i++)
        {
            
            const result = await cloudinary.upload(req.files[i].path);
     
          
            Images.push(result);
        }
     
       
        req.body.images = Images;
        req.body.userId = req.userId;
        console.log(req.body,  "bodyChange");


        
        
        const journeyData = new imageModel(req.body);   
        await journeyData.save();

        res.status(201).json("saved");
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
};

exports.userEditJourney =  async(req,res)=>{
    try{
        
        res.status(200).json("edited");
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.userDeleteJourney =  async(req,res)=>{
    try{
        // console.log(req.body,  "body");
        // console.log(req.query,  "query");   
        const result = await imageModel.findOneAndDelete({_id : req.query._id, userId: req.userId});
        // console.log("deleted from mongoDb", result);
        //cloudinary deltete

        result.imageId.map((image)=>{cloudinary.delete(image)});

        res.status(200).json("deleted");

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.editJourney = async(req,res)=>{
    try{    
        // console.log(req.body,'b2');
        const updatedData = req.body;
        delete updatedData.userId;
        // console.log(req.body, "body");
        // console.log(updatedData, "update");
        const result = await imageModel.updateOne({_id : req.body._id,userId: req.userId}, {$set : updatedData});
        console.log(result, 'updated');
        res.status(200).json("updated");

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

}

exports.deleteImages = async(req, res)=>{
    try{
        delete req.body.userId;
        // console.log(req.body, "hi");
        await req.body.imageId.map((image)=>{cloudinary.delete(image)});
        
        const response = await imageModel.updateOne({_id : req.body._id, userId: req.userId}, {$pull : {  images : {imageId : req.body.imageId} } });
                                                                                                                      
                                                                                                                      
        // console.log(response, "deleted images");
        res.status(200).json("delted");
    }catch(err){
        console.log(err);
        res.status(500).json(err);
        
    }
}












exports.addImages = async(req, res)=>{
    try{
        delete req.body.userId;
        // console.log(req.files, "hello");
        // console.log(req.body, "hi");
   
    
        req.body.images = [];

        for(const image of req.files)
        {
            const result = await cloudinary.upload(image.path);
          
         
            req.body.images.push(result);
        }
        
        // console.log(req.body, "new body");
        
        const response = await imageModel.updateOne({_id : req.body._id, userId: req.userId}, 
            {$addToSet : {imageId : {$each : req.body.imageId},
                           
                            images : {$each : req.body.images }
                            
                        }
                                });

        console.log(response, "imags added");
        res.status(200).json(req.body.images);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
        
    }
}

exports.getImages = async(req,res)=>{

    try{
        const response = await imageModel.find({_id : req.query._id, userId:req.userId});
        
        console.log(response[0], "images");

        res.status(200).json(response[0].images);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
        
    }

}