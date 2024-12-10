require('dotenv').config();
// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/students');
const chapterRoutes = require('./routes/chapters');
const exerciseRoutes = require('./routes/exercises');
const questionRoutes = require('./routes/questions');
const testResultRoutes = require('./routes/testresults');
const analyticsRoutes = require('./routes/analytics');
const authMiddleware = require('./middleware/auth');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all domains (you can customize it as needed)
app.use(cors());

mongoose.connect('mongodb+srv://pariksha_user:secure_password123@cluster0.jbavf.mongodb.net/Pariksha_Mitra?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection failed', err));


// Routes
app.use('/api/students', studentRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/testresults', testResultRoutes);
app.use('/api/analytics', analyticsRoutes);

// Root route for basic check
app.get('/', (req, res) => {
  res.send('Welcome to Pariksha Mitra APP');
});

// Middleware to handle unauthorized access (in case of restricted routes)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
