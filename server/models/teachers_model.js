const db = require('../db');

module.exports = {
  getAll: function(params, callback) {
    const queryStr = "SELECT * FROM teachers";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },
  getOneTeacher: function(params, callback) {
    const queryStr = "SELECT * FROM teachers WHERE id=?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  },
  getTeachersClasses: function(params, callback) {
    const queryStr = "SELECT classes.id, days, time, department, code FROM classes LEFT OUTER JOIN teachers ON (classes.teacher_id=teachers.id) WHERE teachers.id = ?";
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
}