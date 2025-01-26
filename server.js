const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Initialize Express app
const app = express();
connectDB();

// Enable CORS for all origins, ports, and methods
app.use(cors()); // Fully open CORS
app.use(express.json()); // Use express built-in JSON parser

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
