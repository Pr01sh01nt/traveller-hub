const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.js');
const cors = require('cors');
const authorization = require('./middlewares/authorization.js');
const userRouter = require('./routes/user.js');
const peopleRouter = require('./routes/people.js');
const main = require('./config/db.js').main;

app.use(cors({

    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


main().catch((err) => { console.log(err); })



app.use('/auth', authRouter);

app.use('/user', authorization, userRouter);

app.use('/people', authorization, peopleRouter)


app.listen(process.env.PORT, () => { console.log(`server is running on ${process.env.PORT}`) });