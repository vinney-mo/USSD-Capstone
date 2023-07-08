const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const dataRoutes = require('./routes/data');


const PORT = process.env.PORT || 3000;


const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Database connected');
});

const app = express();
app.use(express.json());

app.use('/data', dataRoutes);

app.listen(PORT, () => {
    console.log(`My server is running on PORT ${PORT}`);
});
