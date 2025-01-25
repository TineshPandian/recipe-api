const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Initialize Express app
const app = express();
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Use express built-in JSON parser instead of body-parser

// Recipe API routes
app.use('/api/recipes', recipeRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Recipe API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
