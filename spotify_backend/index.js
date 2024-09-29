const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
require("dotenv").config();
const app = express();
const port = 8000;

app.use(express.json());

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


//Setup passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        // done(error, doesTheUserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


//API : GET
app.get("/", (req, res) => {
  //req contain all data for the request
  //res contain all data for the response
  res.send("hello world");

});
app.use("/auth", authRoutes);

//telling express that our server will run on localhost:8000
app.listen(port, () => {
  console.log("app is running on port" + port);
})




