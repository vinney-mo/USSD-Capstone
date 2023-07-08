const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  minutes: {
    type: Number,
    required: true
  },
  allInOneBundles: {
    type: String,
    required: true
  }
});

const SampleModel = mongoose.model('Sample', SampleSchema);

module.exports = SampleModel;
