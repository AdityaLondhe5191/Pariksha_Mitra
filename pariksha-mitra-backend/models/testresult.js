const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // Add any other fields you need here
});

// Check if the model is already defined
const TestResult = mongoose.models.TestResult || mongoose.model('TestResult', testResultSchema);

module.exports = TestResult;
