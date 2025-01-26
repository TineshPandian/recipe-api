const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

const app = express();
connectDB();

// CORS configuration
const corsOptions = {
    origin: '*', // Allow all origins
    credentials: true, // Allow cookies & credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Requested-With'],
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors()); // Allow preflight requests for all routes

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Recipe API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
