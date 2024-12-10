// utils/calculatePerformance.util.js

/**
 * Calculates performance based on test results.
 * @param {Array} answers - Array of student's answers.
 * @param {Array} correctAnswers - Array of correct answers.
 * @returns {Object} - Contains total questions, correct answers, and performance percentage.
 */
function calculatePerformance(answers, correctAnswers) {
  let correctCount = 0;

  // Compare answers with correct answers
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === correctAnswers[i]) {
      correctCount++;
    }
  }

  const totalQuestions = answers.length;
  const performancePercentage = (correctCount / totalQuestions) * 100;

  return {
    totalQuestions,
    correctAnswers: correctCount,
    performancePercentage: performancePercentage.toFixed(2),
  };
}

module.exports = calculatePerformance;
