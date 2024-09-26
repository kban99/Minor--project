//how to create a model
//step1: require mongoose
//step2: create a mongoose schema(structure)
//step3: create a model

const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,     //by default require is false
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  LikedSongs: {
    type: String,
    default: "",
  },
  LikedPlayLists: {
    type: String,
    default: "",
  },
  subscribedArtists: {
    type: String,
    default: "",
  },

});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;









