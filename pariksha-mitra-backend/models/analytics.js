const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  performanceData: {
    totalTests: { type: Number },
    averageScore: { type: Number },
  },
}, { timestamps: true });

module.exports = mongoose.model('Analytics', analyticsSchema);
