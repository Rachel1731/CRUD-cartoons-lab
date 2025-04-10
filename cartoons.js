const mongoose = require('mongoose');
const cartoonSchema = mongoose.Schema({
    show: String,
    genre: Number,
    rating: String,
  });

  const Cartoon = mongoose.model('Show', cartoonSchema);

  module.exports = Show;

  {
    "show": "Chowder",
    "age": "8 year olds",
    "rating": "4 stars"
  }
  