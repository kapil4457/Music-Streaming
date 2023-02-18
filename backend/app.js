const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
app.use(cookieParser());
var cors = require('cors')
var path = require('path')


	require("dotenv").config();

app.use(cors())
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({  
    limit:'50mb' ,
extended: true ,
 parameterLimit:50000}));


const songs  = require('./routes/songRouter');
const user  = require('./routes/userRouter');


app.use("/api/v1/", songs);
app.use("/api/v1/", user);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(path.join(__dirname, "../frontend/build/index.html")))
})

module.exports = app;