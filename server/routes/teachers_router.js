const express = require('express');
const teachersController = require('../controllers/teachers_controller')

const router = express.Router();

router.get('/', teachersController.getAll);

module.exports = router;