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

// Connects organismsSchema with the "organisms" collection
module.exports = mongoose.model('Organism', organismsSchema);