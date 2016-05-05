const express = require('express');
const studentsRouter = require('./students_router');
const classesRouter = require('./classes_router');
const teachersRouter = require('./teachers_router');


const router = express.Router();

router.use('/students', studentsRouter);
router.use('/teachers', teachersRouter);
router.use('/classes', classesRouter);

module.exports = router;