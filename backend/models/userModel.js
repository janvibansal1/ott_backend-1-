const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  imdbId: String,
  title: String,
  year: String,
  genre: [String],    
  director: String,
  actors: [String],   
  plot: String,
  poster: String,
  rating: Number,
  runtime: String,
}, {
  _id: false 
});

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  profilePic: String,
  wishlist: {type: Array, default: [], new:true},
  watchhistory: {type: Array, default: [], new:true}
}, {
  timestamps: true
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
