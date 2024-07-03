const imageModel = require('../models/imageModel');
const commentModel = require('../models/commentModel');
const authModel = require('../models/authModel');

exports.peopleExperinces = async(req,res)=>{
    const jump = req.query.jump;
    // console.log(req.query);
    try{
        // console.log(jump ,"skip of");
        
        let data = 0;
        if(req.query.search=='')
         data = await imageModel.find({type:"public"}).sort('userId').skip(jump).limit(4);
        else  
        data = await imageModel.find({placeOfJourney : req.query.search, type:"public"}).sort('userId').skip(jump).limit(4);
        // console.log(data);
        res.status(200).json(data);
    }catch(err){
        console.log(err);

        res.status(500).json({});
    }   
};

exports.postComments = async(req, res)=>{
    try{
        
        const comment = new commentModel(req.body);
        // console.log(comment, "comment");
        const result = await comment.save();
        // console.log(result, "save");
        

        res.status(200).json("comment added");
    }catch(err){
        res.status(500).json({});
    }
}

exports.getComments = async(req, res)=>{
    try{
        // console.log(req.query, "comment");

        const response = await commentModel.find({postId : req.query.postId});
        // console.log(response,"comments");
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}


exports.getProfile = async(req, res)=>{

    try{
        console.log(req.query);
        const response = await authModel.findOne({username : req.query?.username});
        response.password = undefined;
        res.status(200).send(response);

    }catch(err)
    {
        console.error(err);
        res.status(401).send({
            success : "error",
            message : err,
        })
    }
}