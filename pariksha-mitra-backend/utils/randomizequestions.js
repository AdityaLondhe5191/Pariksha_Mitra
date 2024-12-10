// utils/randomizeQuestions.util.js

/**
 * Randomizes the order of an array (used for randomizing questions).
 * @param {Array} array - The array of questions to randomize.
 * @returns {Array} - The randomized array.
 */
function randomizeQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
  }
  
  module.exports = randomizeQuestions;
  

  