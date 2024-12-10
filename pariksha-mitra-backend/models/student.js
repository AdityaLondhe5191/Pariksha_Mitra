const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  email: { type: String, unique: true },
  phone: String,
  performance: {
    overall_score: Number,
    subject_scores: Object,
  },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
});

module.exports = mongoose.model('Student', studentSchema);
