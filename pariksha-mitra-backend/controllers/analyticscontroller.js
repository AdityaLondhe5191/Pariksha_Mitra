const Analytics = require('../models/analytics');
const TestResult = require('../models/testresult');  // Ensure the path is correct

module.exports = {
  getAnalytics: async (req, res) => {
    try {
      // Find all test results for the student
      const testResults = await TestResult.find({ student: req.params.studentId });
      
      if (!testResults || testResults.length === 0) {
        return res.status(404).send({ message: 'No test results found for this student.' });
      }

      const totalTests = testResults.length;
      const averageScore = testResults.reduce((sum, result) => sum + result.score, 0) / totalTests;
      
      // Find the existing analytics for the student
      let analytics = await Analytics.findOne({ student: req.params.studentId });
      
      if (!analytics) {
        // If no analytics exist for the student, create new analytics
        analytics = new Analytics({
          student: req.params.studentId,
          performanceData: { totalTests, averageScore },
        });
        await analytics.save();
        return res.status(200).send(analytics);
      }
      
      // Update the analytics if they already exist
      analytics.performanceData.totalTests = totalTests;
      analytics.performanceData.averageScore = averageScore;
      await analytics.save();
      
      return res.status(200).send(analytics);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'An error occurred while fetching analytics.' });
    }
  },
};
