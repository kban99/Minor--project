//how to create a model
//step1: require mongoose
//step2: create a mongoose schema(structure)
//step3: create a model

const mongoose = require("mongoose");

const Song = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },

});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;









