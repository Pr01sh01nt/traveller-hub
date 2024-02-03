const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

exports.main = async function main() {
    
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MONGODB!!");
}