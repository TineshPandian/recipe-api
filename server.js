const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

const app = express();
connectDB();

// Completely open CORS policy (Allows all requests)
app.use(cors({
    origin: '*',  // Allow requests from any origin
    methods: '*', // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allowedHeaders: '*', // Allow all headers
    credentials: false// Allow sending cookies or credentials
}));

app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.send('Recipe API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
