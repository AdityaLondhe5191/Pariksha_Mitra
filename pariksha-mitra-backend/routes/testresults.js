const express = require('express');
const TestResult = require('../models/testresult');
const router = express.Router();

// Get test results by student ID
router.get('/:studentId', async (req, res) => {
  try {
    // Use correct field name 'student' (not 'student_id')
    const results = await TestResult.find({ student: req.params.studentId });
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
