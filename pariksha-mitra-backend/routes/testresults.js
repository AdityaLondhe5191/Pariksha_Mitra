const express = require('express');
const TestResult = require('../models/testresult');
const router = express.Router();

router.get('/:studentId', async (req, res) => {
  try {
    const results = await TestResult.find({ student_id: req.params.studentId });
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
