// utils/generateAnalytics.util.js

const TestResult = require('../models/testResult.model');

/**
 * Generates analytics based on all test results.
 * @returns {Object} - Analytics containing average score and performance distribution.
 */
async function generateAnalytics() {
  try {
    const testResults = await TestResult.find(); // Fetch all test results

    const totalResults = testResults.length;
    let totalScore = 0;
    let distribution = { '0-50': 0, '51-75': 0, '76-100': 0 };

    // Calculate total score and score distribution
    testResults.forEach(result => {
      totalScore += result.score;

      if (result.score <= 50) {
        distribution['0-50']++;
      } else if (result.score <= 75) {
        distribution['51-75']++;
      } else {
        distribution['76-100']++;
      }
    });

    const averageScore = totalResults > 0 ? (totalScore / totalResults).toFixed(2) : 0;

    return {
      totalResults,
      averageScore,
      distribution,
    };
  } catch (error) {
    console.error('Error generating analytics:', error);
    return { error: 'Error generating analytics' };
  }
}

module.exports = generateAnalytics;
