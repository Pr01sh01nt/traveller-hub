const travelUsers = require('../models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res, next) => {

    try {
        const data = req.body;

        const check = await travelUsers.findOne({ username: data.username });
        console.log(check);

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
        const checkUsername = await travelUsers.findOne({ username });
        if (!checkUsername)
            throw new Error("User does not exists");

        const checkPassword = await bcrypt.compare(password, checkUsername.password);
        if (!checkPassword)
            throw new Error("Password does not match");

        const token = jwt.sign({ token: checkUsername._id }, "@ec%r*i4)V");

        res.cookie("accesstoken", token, {
            httpOnly: true,
            maxAge : 60*60,
        }); 

        // res.redirect(201, "/user/home");
        res.status(201).json({ accesstoken: token });

    } catch (err) {
        console.log("error at login route");
        console.log(err);
        res.status(401).json({ error: "Wrong Credentials" });
    }
};