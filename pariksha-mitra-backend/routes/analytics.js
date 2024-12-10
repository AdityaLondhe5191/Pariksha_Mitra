const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticscontroller'); // Ensure correct case

// Define the route for getting analytics by student ID
router.get('/:studentId', analyticsController.getAnalytics);

module.exports = router;
