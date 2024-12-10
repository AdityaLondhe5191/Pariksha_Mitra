const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chaptercontroller');

router.get('/', chapterController.getAllChapters);
router.get('/:id', chapterController.getChapter);
router.post('/', chapterController.createChapter);

module.exports = router;
