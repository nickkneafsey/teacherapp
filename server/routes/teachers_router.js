const express = require('express');
const multer = require('multer');
const teachersController = require('../controllers/teachers_controller')

const router = express.Router();

router.get('/', teachersController.getAll);
router.put('/:id', multer().single('teacherPhoto'), teachersController.addPhotoUrl);
router.get('/:id', teachersController.getOneTeacher);
router.get('/:id/classes', teachersController.getTeachersClasses);

module.exports = router;