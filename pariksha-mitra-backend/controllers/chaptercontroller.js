const Chapter = require('../models/chapter');

module.exports = {
  getAllChapters: async (req, res) => {
    const chapters = await Chapter.find().populate('exercises');
    res.status(200).send(chapters);
  },

  getChapter: async (req, res) => {
    const chapter = await Chapter.findById(req.params.id).populate('exercises');
    res.status(200).send(chapter);
  },

  createChapter: async (req, res) => {
    const newChapter = new Chapter(req.body);
    await newChapter.save();
    res.status(201).send(newChapter);
  },
};
