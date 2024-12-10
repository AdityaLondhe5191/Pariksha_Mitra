const TestResult = require('../models/testresult');

module.exports = {
  // Create a new test result
  createTestResult: async (req, res) => {
    try {
      const { studentId, testId, score, answers } = req.body;
      
      // Ensure that all required fields are provided
      if (!studentId || !testId || !score) {
        return res.status(400).send({ message: 'Student, test, and score are required.' });
      }

      const newTestResult = new TestResult({ student: studentId, test: testId, score, answers });
      await newTestResult.save();

      res.status(201).send(newTestResult);
    } catch (error) {
      res.status(500).send({ message: 'Error creating test result', error });
    }
  },

  // Get a test result by ID
  getTestResult: async (req, res) => {
    try {
      const testResult = await TestResult.findById(req.params.id).populate('student').populate('test');
      if (!testResult) {
        return res.status(404).send({ message: 'Test result not found.' });
      }
      res.status(200).send(testResult);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching test result', error });
    }
  }
};
