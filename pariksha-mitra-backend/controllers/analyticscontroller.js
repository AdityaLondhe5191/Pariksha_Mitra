const Analytics = require('../models/analytics');
const TestResult = require('../models/testresult');  // Adjust the relative path if necessary

module.exports = {
  getAnalytics: async (req, res) => {
    const testResults = await TestResult.find({ student: req.params.studentId });
    const totalTests = testResults.length;
    const averageScore = testResults.reduce((sum, result) => sum + result.score, 0) / totalTests;
    
    const analytics = await Analytics.findOne({ student: req.params.studentId });
    if (!analytics) {
      const newAnalytics = new Analytics({
        student: req.params.studentId,
        performanceData: { totalTests, averageScore },
      });
      await newAnalytics.save();
      return res.status(200).send(newAnalytics);
    }
    
    analytics.performanceData.totalTests = totalTests;
    analytics.performanceData.averageScore = averageScore;
    await analytics.save();
    res.status(200).send(analytics);
  },
};
