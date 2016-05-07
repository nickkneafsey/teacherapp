const express = require('express');
const multer = require('multer');
const studentsController = require('../controllers/students_controller')

const router = express.Router();

router.get('/', studentsController.getAll);
router.put('/:id', multer().single('studentPhoto'), studentsController.addPhotoUrl)

module.exports = router;