const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        comment : {type : String, required : true},
        postId : {type : Schema.Types.ObjectId, required : true, ref : 'images'},
        userId : {type : String, required : true}
}, {timestamps: true});


module.exports = mongoose.model("comments", commentSchema);