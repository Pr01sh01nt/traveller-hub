const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    placeOfJourney : {type: String, required : true},
    description : {type: String, required: true},
    imageId : {type: [String], default:[]},
    type   : {type : String , required : true},
    userId   : {type : String, required : true}
}, {timestamps: true});

module.exports = new mongoose.model("images", imageSchema);