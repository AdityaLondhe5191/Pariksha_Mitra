const Student = require('../models/student');

module.exports = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const newStudent = new Student({ name, email, password });
    await newStudent.save();
    res.status(201).send(newStudent);
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || student.password !== password) {
      return res.status(401).send('Invalid credentials');
    }
    res.status(200).send(student);
  },

  getStudent: async (req, res) => {
    const student = await Student.findById(req.params.id).populate('testsTaken');
    res.status(200).send(student);
  },
};
