const db = require('../db');

module.exports = {
  getAll: function(params, callback) {
    const queryStr = "SELECT * FROM students";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },
  addPhotoUrl: function(params, callback) {
    const queryStr = "UPDATE students SET image_url=? WHERE id=?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  },
  getOneStudent: function(params, callback) {
    const queryStr = "SELECT * FROM students WHERE id=?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  },
  getStudentsSchedule: function(params, callback) {
    const queryStr = "SELECT teacher_id, days, time, department, code, student_id, class_id, teachers.name FROM classes  LEFT OUTER JOIN students_classes ON (classes.id = students_classes.class_id) LEFT OUTER JOIN students ON (students_classes.student_id=students.id) LEFT OUTER JOIN teachers ON (classes.teacher_id=teachers.id) WHERE students.id = ?"
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  },
  getStudentsNotInClass: function(params, callback) {
    const queryStr = "SELECT * FROM students WHERE id NOT IN (SELECT students.id from students LEFT OUTER JOIN students_classes ON (students.id=students_classes.student_id) WHERE students_classes.class_id = ?)";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  }
}