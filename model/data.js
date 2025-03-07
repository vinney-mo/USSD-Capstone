const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  likes: {
    required: false,
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('data', dataSchema);
