const mongoose = require('mongoose');
const SampleModel = require('./path/to/sampleModel'); // Replace with the actual path to your SampleModel file

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/sampleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Fetch the data
    SampleModel.find({})
      .then(data => {
        console.log('Fetched data:', data);
        // Process the data as needed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        // Disconnect from the MongoDB database
        mongoose.disconnect();
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
