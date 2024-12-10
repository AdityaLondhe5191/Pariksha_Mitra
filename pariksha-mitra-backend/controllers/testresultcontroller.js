const TestResult = require('../models/testResult');

module.exports = {
  createTestResult: async (req, res) => {
    const { studentId, score, answers } = req.body;
    const newTestResult = new TestResult({ student: studentId, score, answers });
    await newTestResult.save();
    res.status(201).send(newTestResult);
  },

  getTestResult: async (req, res) => {
    const testResult = await TestResult.findById(req.params.id).populate('student');
    res.status(200).send(testResult);
  },
};
