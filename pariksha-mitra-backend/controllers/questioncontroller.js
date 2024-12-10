const Question = require('../models/question');

module.exports = {
  getAllQuestions: async (req, res) => {
    const questions = await Question.find();
    res.status(200).send(questions);
  },

  getQuestion: async (req, res) => {
    const question = await Question.findById(req.params.id);
    res.status(200).send(question);
  },

  createQuestion: async (req, res) => {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).send(newQuestion);
  },
};

