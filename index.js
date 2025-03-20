const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');  // Import the auth routes

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://akshara:Aksharad6@cluster0.2uks2.mongodb.net/demo-assignment')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

// Use the auth routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});