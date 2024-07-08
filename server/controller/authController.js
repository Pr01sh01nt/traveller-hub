const travelUsers = require('../models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');
const cloudinary = require('../utils/cloudinary');
const imageModel = require('../models/imageModel');


exports.register = async (req, res, next) => {

    try {
        const data = req.body;
        // console.log(data);
        const check = await travelUsers.findOne({ username: data.username });
        // console.log(check);

        if (check)
            throw new Error("username already present");

        data.password = await bcrypt.hash(data.password, 10);

        const newEntry = new travelUsers(data);
        await newEntry.save();
        res.status(200).json({ message: "User Registered" });
        // res.redirect("/auth/login");
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "error occured" });
    }
};

exports.login = async (req, res, next) => {
    console.log("at loginin route");

    try {
        const { username, password } = req.body;
        const userData = await travelUsers.findOne({ username });
        if (!userData)
            throw new Error("User does not exists");

        const checkPassword = await bcrypt.compare(password, userData.password);
        if (!checkPassword)
            throw new Error("Password does not match");

        // console.log(userData);

        const token = jwt.sign({ token: userData.username }, "@ec%r*i4)V");

        const tokenOption = {
            httpOnly : true,
            secure : true,
            sameSite : 'None'
        }

        res.status(201).cookie("accesstoken", token,tokenOption)
        .json({ accesstoken: token });

    } catch (err) {
        console.log("error at login route");
        console.log(err);
        res.status(401).json({ error: "Wrong Credentials" });
    }
};

exports.editProfile = async (req, res, next) => {
    try {

        const { email, about, userId } = req.body;
        console.log(req.body);
        const result = await authModel.updateOne({ username: userId },
            { email: email, about: about }
        );

        console.log(result);

        res.status(200).send({
            status: "success",
            messsage: 'Updated successfully'
        });


    } catch (err) {
        console.log(err);
    }
};



exports.getProfile = async (req, res, next) => {

    try {

        const user = await authModel.findOne({ username: req.body.userId });

        user.password = undefined;


        console.log(user);

        res.status(200).send({
            status: "success",
            user
        });

    } catch (err) {
        console.error(err);
    }
};


exports.dashBoardImage = async (req, res, next) => {
    try {

        console.log(req.files, req.body);

        if (!req.files) 
            new Error("Image not available");

            const image = await cloudinary.upload(req.files[0].path);
            console.log(image);
            const result = await authModel.updateOne({username : req.body.userId},{
                imageURL : image.imageURL
            });


            console.log(result);

            res.status(200).send({
                status: "success",
                message: 'image uploaded successfully'
            });
        




    } catch (err) {
        console.log(err);
        res.status(401).send({
            status: "error",
            err
        });
    }
}


exports.profileImage = async (req, res, next) => {
    try {

        console.log(req.files, req.body);

        if (!req.files) 
            new Error("Image not available");

            const image = await cloudinary.upload(req.files[0].path);
            console.log(image);
            const result = await authModel.updateOne({username : req.body.userId},{
                profilePicURL : image.imageURL
            });

            
            console.log(result);
            
            res.status(200).send({
                status: "success",
                message: 'image uploaded successfully'
            });
        

    } catch (err) {
        console.log(err);
        res.status(401).send({
            status: "error",
            err
        });
    }
}