const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  email: { type: String, unique: true },
  password: String,
});



module.exports = User=mongoose.model("User", userSchema);
