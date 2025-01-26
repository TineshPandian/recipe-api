const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

const app = express();
connectDB();

const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Explicitly define allowed methods
    allowedHeaders: ['Content-Type'], // Allow only necessary headers
    credentials: false // Ensure no cookies or credentials are included
};

app.use(cors(corsOptions));


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
