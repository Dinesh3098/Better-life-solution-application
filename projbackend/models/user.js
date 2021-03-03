const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  pic: {
    type: String,
    sparse: true
  },
  thumbnail: {
    type: String,
    sparse: true
  },
  names: {
    type: String,
    sparse: true
  },
  gender: {
    type: String,
    sparse: true
  },
  nat: {
    type: String,
    sparse: true
  },
  email: {
    type: String,
    sparse: true
  },
  phone: {
    type: String,
    sparse: true
  },
});

userSchema.virtual("name").set(function (name) {
  this.names = name.title + " " + name.first + " " + name.last;
});

userSchema.virtual("picture").set(function (picture) {
  this.pic = picture.large;
  this.thumbnail = picture.thumbnail;
});

module.exports = mongoose.model("User", userSchema);
