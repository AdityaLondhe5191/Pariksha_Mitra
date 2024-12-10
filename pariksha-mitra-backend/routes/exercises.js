const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercisecontroller');

router.get('/', exerciseController.getAllExercises);
router.get('/:id', exerciseController.getExercise);
router.post('/', exerciseController.createExercise);

module.exports = router;
