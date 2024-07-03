const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelUsers = new Schema({
    
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String },
    about: { type: String },
    profilePicURL: { type: String },
    imageURL: { type: String },

}, { timestamps: true });


module.exports = mongoose.model("travelUsers", travelUsers);