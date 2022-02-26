const express=require('express');
var bodyParser = require('body-parser')
const mongoose= require('mongoose');
const path=require('path');
const cors=require('cors');
const foodRouter=require(path.join(__dirname,'./app/routes/foodRoutes'));
const app=express();



mongoose.connect(process.env.MONGODBURL || "mongodb+srv://utmalik:qwerty123@cluster0.8r1bi.mongodb.net/foodDB?retryWrites=true&w=majority");

//cors 
app.use(cors({
    origin: '*'
}));

var db=mongoose.connection;

db.on('error',()=>{
    console.log("DB unable to connect")
});

db.on('open',()=>{
    console.log("connection successful")
})


// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(foodRouter);


app.listen( process.env.PORT || 3000,()=>{
    console.log(`web server is running at port ${process.env.port || 3000} `);
});