const mongoose = require('mongoose');
const cartoonSchema = mongoose.Schema({
    show: String,
    genre: String,
    rating: String,
  });

  const Cartoon = mongoose.model('Show', cartoonSchema);

  module.exports = Cartoon;
