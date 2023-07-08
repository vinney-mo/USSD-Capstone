const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  numberField: {
    type: Number,
    required: true
  },
  stringField: {
    type: String,
    required: true
  }
});

const SampleModel = mongoose.model('Sample', SampleSchema);

module.exports = SampleModel;
