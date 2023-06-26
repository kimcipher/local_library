const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

// Declare a virtual for the genre's URL, named url.
genreSchema.virtual('url').get(function() {
  return `/genres/${this._id}`;
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
