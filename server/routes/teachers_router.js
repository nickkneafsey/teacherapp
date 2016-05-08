const express = require('express');
const teachersController = require('../controllers/teachers_controller')

const router = express.Router();

router.get('/', teachersController.getAll);
router.get('/:id', teachersController.getOneTeacher);
router.get('/:id/classes', teachersController.getTeachersClasses);

module.exports = router;