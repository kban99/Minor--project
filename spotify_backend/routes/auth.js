const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");


//This POST route will help to register a user
router.post("/register", async (req, res) => {
  //This code is run when the /register api is called as a POST request

  //My req body will be of the format{email, password, firstName, lastName, username}
  const {email, password, firstName, lastName, username} = req.body;

  // step 2 : Does a user with this email already exist? if yes, we throw an error,
  const user = await User.findOne({email: email});
  if (user) {
    return res.status(403).json({error:"Account already exist with this email"})
  }
  // This is a valid request

  // Step 3: Create a new user in the DB
  // Step 3.1: we do not store password in plain text, we convert it to a HASH
  const hashedPassword = bcrypt.hash(password, 10);
  const newUserData = {email, password: hashedPassword, firstName, lastName, username};
  const newUser = await User.create(newUserData);

  // Step 4: we want to create the token to return to the user
  const token = await getToken(email, newUser);

  // Step 5: return the result to the user 
  const userToReturn = {...newUser.toJSON(), token};
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

router.post("/login", async (req,  res) => {
  //step:1 get email and password sent by user from req.body
  const {email, password} = req.body;

  //step:2 check if a user with the given email exists. If not, the credentials are invalid
  const user = await User.findOne({email: email});
  if (!user){
    return res.status(403).json({err:"Invalid credentials"});
  }

  //step:3 If the user exists, check if the password is correct. if not, the credentials are invalid
  //bcrypt.compare enabled us to compare 1 password in plaintext(password from req.body) to a hashed password(the one in our db) securely.
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    return res.status(403).json({err:"Invalid credentials"})
  }

  //step:4 if the credentials are correct, return a token to the user.
  const token = await getToken(user.email, user);
  const userToReturn = {...user.toJSON(), token};
  delete userToReturn.password;
  return res.status(200).json(userToReturn);

});


module.exports = router;










