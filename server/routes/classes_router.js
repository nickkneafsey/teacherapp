const express = require('express');
const classesController = require('../controllers/classes_controller')

const router = express.Router();

router.get('/', classesController.getAll);
router.get('/:id', classesController.getOneClass);
router.get('/:id/students', classesController.getStudentsInClass);
router.post('/:id', classesController.addStudentToClass);

module.exports = router;