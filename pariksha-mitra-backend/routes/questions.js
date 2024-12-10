const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questioncontroller');

router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getQuestion);
router.post('/', questionController.createQuestion);


module.exports = router;


