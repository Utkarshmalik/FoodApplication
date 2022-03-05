const { response } = require("express");
const express=require("express");
const path=require('path');
const foodControllors=require( path.join(__dirname,"../Controllers/foodController"));
const foodModel=require(path.join(__dirname,'../models/food'));
const app=express();

const authMiddleWare=require('../middlewares/authMiddleware');



app.get("/foods",authMiddleWare,foodControllors.findAll);
app.get("/food/:id",authMiddleWare,foodControllors.findOne);
app.post("/food",authMiddleWare,foodControllors.create);
app.patch("/food/:id",authMiddleWare,foodControllors.update);
app.delete("/food/:id",authMiddleWare,foodControllors.delete);



module.exports=app;

