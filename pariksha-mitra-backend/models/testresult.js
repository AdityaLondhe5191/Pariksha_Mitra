// models/testresult.js

const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // add any other fields you need here
});

// Check if the model is already defined
const TestResult = mongoose.models.TestResult || mongoose.model('TestResult', testResultSchema);

module.exports = TestResult;
