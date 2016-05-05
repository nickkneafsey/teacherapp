const express = require('express');
const studentsController = require('../controllers/students_controller')

const router = express.Router();

router.get('/', studentsController.getAll);

module.exports = router;