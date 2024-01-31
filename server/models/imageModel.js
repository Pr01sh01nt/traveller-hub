const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageModel = new Schema({
    placeOfJourney : {type: String, required : true},
    description : {type: String, required: true},
    imageId : {type: [String], required : true},
    type   : {type : String , required : true},
    userId   : {type : Schema.Types.ObjectId, required : true, ref: 'travelUsers'}
});

module.exports = new mongoose.model("images", imageModel);