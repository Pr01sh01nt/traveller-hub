const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.js');
const cors = require('cors');
const dotenv = require('dotenv').config();
const authorization = require('./routes/authorization');
const PORT = process.env.PORT;
const userRouter = require('./routes/user.js');
const peopleRouter = require('./routes/people.js');

app.use(cors({
    
        origin  : ["http://localhost:3000"],
        methods : ["GET", "POST"],
        credentials : true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

async function main() {
    
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MONGODB!!");
}
main().catch((err) => { console.log(err); })



app.use('/auth', authRouter);

app.use('/user', authorization,  userRouter);

app.use('/people',authorization, peopleRouter)


app.listen(PORT, () => { console.log(`server is running on ${PORT}`) });