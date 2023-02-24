const mongoose = require('mongoose');

const organismsSchema = new mongoose.Schema({
  commonName: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  }
});

// Connects planetSchema with the "planets" collection
module.exports = mongoose.model('Organisms', organismsSchema);