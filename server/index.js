const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoute.js');
const cors = require('cors');
const authorization = require('./middlewares/authorization.middleware.js');
const userRouter = require('./routes/userRoute.js');
const peopleRouter = require('./routes/peopleRoute.js');
const main = require('./config/db.js').main;
require('dotenv').config();

app.use(cors({

    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


main().catch((err) => { console.log(err); })


app.post('/', (req,res)=>{
    res.json(req.body);
});


app.use('/api/auth', authRouter);

app.use('/api/user', authorization, userRouter);

app.use('/api/people', authorization, peopleRouter);

app.use("/api", authorization, (req,res)=>{
    res.status(200).json("");
});


app.get('/', (req, res)=>{
    res.json("hey, you made the connection with server");
});

// app.get('/api', (req, res)=>{
//     res.json("hey, you made the connection with server");
// });


// app.post('/api', (req, res)=>{
//     res.json("hey, you made the connection with server");
// });



app.listen(process.env.PORT, () => { console.log(`server is running on ${process.env.PORT}`) });