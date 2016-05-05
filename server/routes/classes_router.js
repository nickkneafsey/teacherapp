const express = require('express');
const classesController = require('../controllers/classes_controller')

const router = express.Router();

router.get('/', classesController.getAll);

module.exports = router;