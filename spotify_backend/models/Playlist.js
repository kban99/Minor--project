//how to create a model
//step1: require mongoose
//step2: create a mongoose schema(structure)
//step3: create a model

const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
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
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  songs: [        // [] is used to store as an array
    {
      type: mongoose.Types.ObjectId,
      ref: "songs",
    },
  ],
  collaborators: [{
    type: mongoose.Types.ObjectId,
    ref: "user",
  }],

});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;









