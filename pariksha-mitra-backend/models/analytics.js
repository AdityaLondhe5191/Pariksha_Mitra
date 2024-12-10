const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  performanceData: {
    totalTests: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Analytics', analyticsSchema);
