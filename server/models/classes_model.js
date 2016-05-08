const db = require('../db');

module.exports = {
  getAll: function(params, callback) {
    const queryStr = "SELECT * FROM classes";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },

  getOneClass: function(params, callback) {
    const queryStr = "SELECT * FROM classes WHERE id=?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  },

  getStudentsInClass: function(params, callback) {
    const queryStr = "SELECT * FROM students LEFT OUTER JOIN students_classes ON (students.id = students_classes.student_id) WHERE students_classes.class_id = ?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    })
  }
}