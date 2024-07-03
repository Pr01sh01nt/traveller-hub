const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
    imageId : {type: String},
    imageURL : {type: String},
},{_id : false});

const imageSchema = new Schema({

    placeOfJourney : {type: String, required : true},
    description : {type: String, required: true},
 
    type   : {type : String , required : true},
    userId   : {type : String, required : true},
  
    images : {type : [image], default:[]},
    
}, {timestamps: true});

module.exports = new mongoose.model("images", imageSchema);