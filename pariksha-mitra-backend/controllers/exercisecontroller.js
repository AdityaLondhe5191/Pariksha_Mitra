const Exercise = require('../models/exercise');

module.exports = {
  getAllExercises: async (req, res) => {
    const exercises = await Exercise.find().populate('questions');
    res.status(200).send(exercises);
  },

  getExercise: async (req, res) => {
    const exercise = await Exercise.findById(req.params.id).populate('questions');
    res.status(200).send(exercise);
  },

  createExercise: async (req, res) => {
    const newExercise = new Exercise(req.body);
    await newExercise.save();
    res.status(201).send(newExercise);
  },
};
