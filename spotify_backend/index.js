const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;



//connect mongodb to our node app
//mongoose.connect() takes 2 arguments:-
// 1. which db to connect to (db url)
// 2. connection options
mongoose.connect("mongodb+srv://pratim:" + process.env.MONGO_PASSWORD + "@cluster0.xgns4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo", err);
  });


//API : GET
app.get("/", (req, res) => {
  //req contain all data for the request
  //res contain all data for the response
  res.send("hello world");

});

//telling express that our server will run on localhost:8000
app.listen(port, () => {
  console.log("app is running on port" + port);
})




