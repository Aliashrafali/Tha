const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  image: {
    type: String,
    required: true,
    trim:true
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
