const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
  Resource: {
    name: String,
    type: Number,
    required: true
  },
  // databundles: {
  //   type: Number,
  //   required: true
  // }
  // monthlyMinutes: {
  //   type: Number,
  //   required: true
  // },
  // allInOneBundles: {
  //   type: Number,
  //   required: true
  // },
  // easyTalkBundles: {
  //   type: Number,
  //   required: true
  // },
  // tunukiwaOffers: {
  //   type: Number,
  //   required: true
  // }
});

const SampleModel = mongoose.model('Sample', SampleSchema);

module.exports = SampleModel;
