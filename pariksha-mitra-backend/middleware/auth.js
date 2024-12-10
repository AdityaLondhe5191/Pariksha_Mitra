const jwt = require('jsonwebtoken');
const Student = require('../models/student');

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) {
      return res.status(403).send('Access denied');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.studentId = decoded.id;
      next();
    } catch (err) {
      return res.status(400).send('Invalid token');
    }
  },

  isStudent: async (req, res, next) => {
    const student = await Student.findById(req.studentId);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    next();
  },
};
